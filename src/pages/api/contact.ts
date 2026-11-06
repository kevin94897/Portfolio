export const prerender = false;

import type { APIRoute } from "astro";

const BREVO_API = "https://api.brevo.com/v3";
const LIST_ID = 2; // Lista Portfolio
const NOTIFY_EMAIL = "kevin94897@gmail.com";
const SENDER = { name: "Kevin Gómez Portfolio", email: "noreply@kevin-gomez.dev" };

// A human needs a few seconds to fill the form; scripted posts are instant.
const MIN_FILL_MS = 3000;
const ALLOWED_HOSTS = new Set(["kevin-gomez.dev", "www.kevin-gomez.dev", "localhost", "127.0.0.1"]);

interface RateLimiter {
  limit(opts: { key: string }): Promise<{ success: boolean }>;
}

// Minimal slice of the Cloudflare D1 API used here.
export interface D1Like {
  prepare(sql: string): {
    bind(...values: unknown[]): {
      run(): Promise<{ meta?: { last_row_id?: number } }>;
      all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
    };
    all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
  };
}

type Status = "ok" | "failed" | "skipped";

export const POST: APIRoute = async ({ request, locals }) => {
  // import.meta.env works locally; Cloudflare runtime env works in production
  const env = (locals as any).runtime?.env ?? {};
  const apiKey: string | undefined = import.meta.env.BREVO_API_KEY ?? env.BREVO_API_KEY;
  const db: D1Like | undefined = env.LEADS_DB;

  // ── Anti-spam 1: only accept posts sent from this site's own pages ──
  const origin = request.headers.get("origin");
  let originHost = "";
  try {
    originHost = origin ? new URL(origin).hostname : "";
  } catch {}
  if (!ALLOWED_HOSTS.has(originHost)) {
    return json({ ok: false, error: "Forbidden" }, 403);
  }

  // ── Anti-spam 2: per-IP rate limit (Workers Rate Limiting binding) ──
  const limiter: RateLimiter | undefined = env.CONTACT_LIMITER;
  if (limiter) {
    const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
    const { success } = await limiter.limit({ key: ip });
    if (!success) return json({ ok: false, error: "Too many requests" }, 429);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  // ── Anti-spam 3: honeypot + minimum fill time ──
  // Bots get a fake success so they don't learn to adapt.
  const elapsed = Number(body.elapsed);
  if (body.website || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return json({ ok: true }, 200);
  }

  const str = (v: unknown, max: number) =>
    typeof v === "string" ? v.trim().slice(0, max) : "";
  const nombre = str(body.nombre, 100);
  const apellidos = str(body.apellidos, 100);
  const email = str(body.email, 200);
  const asunto = str(body.asunto, 200);
  const message = str(body.message, 5000);

  if (!nombre || !email || !asunto || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Missing required fields" }, 400);
  }

  // ── 1. Backup: store the lead in D1 before touching Brevo ──
  let page = "";
  try {
    page = new URL(request.headers.get("referer") ?? "").pathname;
  } catch {}
  const lang = page.startsWith("/en") ? "en" : "es";
  const country: string = (request as any).cf?.country ?? "";

  let leadId: number | undefined;
  if (db) {
    try {
      const res = await db
        .prepare(
          "INSERT INTO leads (nombre, apellidos, email, asunto, message, lang, page, ip_country) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        )
        .bind(nombre, apellidos, email, asunto, message, lang, page.slice(0, 200), country)
        .run();
      leadId = res.meta?.last_row_id;
    } catch (err) {
      console.error("[contact] D1 backup failed", err);
    }
  } else {
    console.error("[contact] LEADS_DB binding missing — lead not backed up");
  }
  const saved = leadId !== undefined;

  const setStatus = async (column: "notify_status" | "list_status", status: Status) => {
    if (!db || !saved) return;
    try {
      await db.prepare(`UPDATE leads SET ${column} = ? WHERE id = ?`).bind(status, leadId).run();
    } catch (err) {
      console.error("[contact] D1 status update failed", err);
    }
  };

  if (!apiKey) {
    console.error("[contact] BREVO_API_KEY is not set");
    await setStatus("notify_status", "skipped");
    await setStatus("list_status", "skipped");
    return saved ? json({ ok: true }, 200) : json({ ok: false, error: "Server misconfigured" }, 500);
  }

  const esc = (s: string) =>
    s.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
    );

  const headers = {
    "api-key": apiKey,
    "Content-Type": "application/json",
    accept: "application/json",
  };

  // ── 2. Notify the owner by email ──
  const emailBody = `
<p><strong>Nombre:</strong> ${esc(nombre)} ${esc(apellidos)}</p>
<p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
<p><strong>Asunto:</strong> ${esc(asunto)}</p>
${message ? `<p><strong>Mensaje:</strong></p><p>${esc(message).replace(/\n/g, "<br>")}</p>` : ""}
`.trim();

  let notified = false;
  try {
    const notifyRes = await fetch(`${BREVO_API}/smtp/email`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        sender: SENDER,
        to: [{ email: NOTIFY_EMAIL, name: "Kevin Gómez" }],
        replyTo: { email, name: `${nombre} ${apellidos}`.trim() },
        subject: `Portfolio Lead: ${asunto}`,
        htmlContent: `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#222;">${emailBody}</body></html>`,
      }),
    });
    notified = notifyRes.ok;
    if (!notified) {
      console.error("[contact] notification failed", notifyRes.status, await notifyRes.text());
    }
  } catch (err) {
    console.error("[contact] notification request error", err);
  }
  await setStatus("notify_status", notified ? "ok" : "failed");

  // With neither the backup nor the email, the lead would be lost: tell the
  // visitor so they can retry or use WhatsApp.
  if (!notified && !saved) {
    return json({ ok: false, error: "Could not send message" }, 502);
  }

  // ── 3. Add / update the contact in the Brevo list (best effort) ──
  let listed = false;
  try {
    const contactRes = await fetch(`${BREVO_API}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        attributes: { NOMBRE: nombre, APELLIDOS: apellidos, ASUNTO: asunto, MESSAGE: message },
        listIds: [LIST_ID],
        updateEnabled: true,
      }),
    });
    listed = contactRes.ok;
    if (!listed) {
      console.error("[contact] list sync failed", contactRes.status, await contactRes.text());
    }
  } catch (err) {
    console.error("[contact] list sync request error", err);
  }
  await setStatus("list_status", listed ? "ok" : "failed");

  return json({ ok: true }, 200);
};

function json(data: object, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
