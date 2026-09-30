// analytics.ts — GA4 event layer.
//
// `gtag` is only defined in production builds (see Layout.astro), so every
// call is a no-op in dev except for a console.debug trace. Clarity picks up
// the same events as custom tags, which lets heatmaps/recordings be filtered
// by them (e.g. "sessions with generate_lead").
//
// Events sent (see the tracking plan in the repo history / README):
//   contact_click      tel / mailto / WhatsApp links         {method, location}
//   cta_click          any link to #contact                  {location, label}
//   document_download  PDFs (CV, cartas)                     {document, location}
//   select_plan        pricing CTA                           {plan}
//   project_open       project modal opened                  {project, category}
//   project_link       live site / case study from a project {project, link_type, location}
//   language_switch    ES/EN toggle                          {to}
//   blog_filter        blog category filter                  {category}
//   section_view       home section ≥40% visible, once       {section}
//   scroll_depth       25/50/75/100 % of the page            {percent}
//   read_progress      25/50/75/100 % of an article/case     {content_type, content_id, percent}
//   read_complete      reached end with enough time spent    {content_type, content_id, seconds}
//   form_start / form_error / generate_lead  contact form
//   cookie_consent     choice in the cookie notice           {choice}

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}): void {
  if (import.meta.env.DEV) console.debug("[track]", event, params);
  window.gtag?.("event", event, params);
  window.clarity?.("event", event);
}

/** Closest section id (or "nav"/"footer") — tells us *where* a click happened. */
function locationOf(el: Element): string {
  if (el.closest("nav, #mobile-menu")) return "nav";
  if (el.closest("footer")) return "footer";
  return el.closest("section[id]")?.id ?? el.closest("[data-read]")?.getAttribute("data-read") ?? "page";
}

function labelOf(el: Element): string {
  return (el.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 60);
}

function initClicks(): void {
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as Element | null;
      if (!target) return;

      // Explicit tracking: data-track="event" data-track-foo="bar" → {foo: "bar"}
      const tagged = target.closest<HTMLElement>("[data-track]");
      if (tagged) {
        const params: Params = { location: locationOf(tagged) };
        for (const [k, v] of Object.entries(tagged.dataset)) {
          if (k.startsWith("track") && k !== "track") {
            params[k.slice(5).replace(/[A-Z]/g, (c) => "_" + c.toLowerCase()).slice(1)] = v;
          }
        }
        track(tagged.dataset.track!, params);
        return; // explicit tag wins over the automatic rules below
      }

      const a = target.closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const location = locationOf(a);

      if (href.startsWith("tel:")) {
        track("contact_click", { method: "phone", location });
      } else if (href.startsWith("mailto:")) {
        track("contact_click", { method: "email", location });
      } else if (/wa\.me|whatsapp\.com/.test(href)) {
        track("contact_click", { method: "whatsapp", location });
      } else if (/\.pdf($|\?)/i.test(href)) {
        const file = href.split("/").pop()!.replace(/\.pdf.*$/i, "");
        const document = /cv/i.test(file) ? "cv" : file.toLowerCase();
        track("document_download", { document, location });
      } else if (/#contact$/.test(href)) {
        track("cta_click", { location, label: labelOf(a) });
      }
    },
    { capture: true },
  );
}

function initSectionViews(): void {
  const sections = document.querySelectorAll<HTMLElement>("main section[id], body > section[id]");
  if (!sections.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        track("section_view", { section: (entry.target as HTMLElement).id });
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.4 },
  );
  sections.forEach((s) => io.observe(s));
}

/** Fires each threshold once as `getProgress()` crosses it. */
function onThresholds(getProgress: () => number, fire: (pct: number) => void): () => void {
  const pending = [25, 50, 75, 100];
  return () => {
    const pct = getProgress() * 100;
    while (pending.length && pct >= pending[0] - (pending[0] === 100 ? 2 : 0)) {
      fire(pending.shift()!);
    }
  };
}

function initScrollDepth(): void {
  const check = onThresholds(
    () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      return max <= 0 ? 1 : scrollY / max;
    },
    (percent) => track("scroll_depth", { percent }),
  );
  addEventListener("scroll", throttle(check, 250), { passive: true });
}

/**
 * Reading on blog posts / case studies. Mark the content wrapper with
 *   data-read="article|case_study" data-read-id="slug" data-read-minutes="6"
 * `read_complete` needs the end reached AND at least 40 % of the estimated
 * reading time spent with the tab visible — filters out skimmers.
 */
function initReading(): void {
  const el = document.querySelector<HTMLElement>("[data-read]");
  if (!el) return;
  const content_type = el.dataset.read!;
  const content_id = el.dataset.readId ?? location.pathname;
  const minutes = Number(el.dataset.readMinutes) || 3;
  const minSeconds = Math.round(minutes * 60 * 0.4);

  let visibleMs = 0;
  let lastTick = performance.now();
  const tick = () => {
    const now = performance.now();
    if (document.visibilityState === "visible") visibleMs += now - lastTick;
    lastTick = now;
  };
  document.addEventListener("visibilitychange", tick);

  let reachedEnd = false;
  let completed = false;
  const maybeComplete = () => {
    tick();
    const seconds = Math.round(visibleMs / 1000);
    if (!completed && reachedEnd && seconds >= minSeconds) {
      completed = true;
      track("read_complete", { content_type, content_id, seconds });
    }
  };

  const check = onThresholds(
    () => {
      const r = el.getBoundingClientRect();
      const total = r.height - innerHeight * 0.5;
      return total <= 0 ? 1 : Math.min(1, (innerHeight * 0.5 - r.top) / total);
    },
    (percent) => {
      track("read_progress", { content_type, content_id, percent });
      if (percent === 100) reachedEnd = true;
      maybeComplete();
    },
  );
  addEventListener("scroll", throttle(check, 250), { passive: true });
  // Slow readers reach the end before the time threshold — keep checking.
  const timer = setInterval(() => {
    maybeComplete();
    if (completed) clearInterval(timer);
  }, 5000);
}

function throttle(fn: () => void, ms: number): () => void {
  let t: ReturnType<typeof setTimeout> | undefined;
  return () => {
    if (t) return;
    t = setTimeout(() => {
      t = undefined;
      fn();
    }, ms);
  };
}

export function initTracking(): void {
  initClicks();
  initSectionViews();
  initScrollDepth();
  initReading();
}
