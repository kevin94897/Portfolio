// consent.ts — cookie choice storage + Google Consent Mode v2 / Clarity sync.
//
// The inline analytics script in Layout.astro reads the same key before GA4
// loads to set the *default* consent state; keep CONSENT_KEY in sync there.

export const CONSENT_KEY = "kg-consent";
const VERSION = 1;

export interface Consent {
  analytics: boolean;
}

export function readConsent(): Consent | null {
  try {
    const raw = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null");
    return raw && raw.v === VERSION ? { analytics: Boolean(raw.analytics) } : null;
  } catch {
    return null;
  }
}

export function saveConsent(consent: Consent): void {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ v: VERSION, analytics: consent.analytics, ts: Date.now() }),
    );
  } catch {}
  applyConsent(consent);
}

/** Pushes the choice to GA4 (Consent Mode v2) and Clarity (Consent API v2). */
export function applyConsent({ analytics }: Consent): void {
  const state = analytics ? "granted" : "denied";
  window.gtag?.("consent", "update", { analytics_storage: state });
  window.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: state });
}
