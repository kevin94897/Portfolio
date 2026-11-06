// GET /api/leads.csv — downloads every contact-form lead stored in D1 as a
// CSV that opens directly in Excel. Protected with HTTP Basic auth: the
// browser asks for a user (any) and the password in the LEADS_PASSWORD secret.
export const prerender = false;

import type { APIRoute } from "astro";
import type { D1Like } from "./contact";

const COLUMNS = [
  "id",
  "created_at",
  "nombre",
  "apellidos",
  "email",
  "asunto",
  "message",
  "lang",
  "page",
  "ip_country",
  "notify_status",
  "list_status",
] as const;

export const GET: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env ?? {};
  const password: string | undefined = env.LEADS_PASSWORD ?? import.meta.env.LEADS_PASSWORD;
  const db: D1Like | undefined = env.LEADS_DB;

  if (!password || password.length < 16 || !db) {
    console.error("[leads] LEADS_PASSWORD (16+ chars) or LEADS_DB binding missing");
    return new Response("Not available", { status: 503, headers: noStore() });
  }

  // Throttle guesses with the same per-IP limiter the contact form uses.
  const limiter = env.CONTACT_LIMITER;
  if (limiter) {
    const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
    const { success } = await limiter.limit({ key: `leads:${ip}` });
    if (!success) return new Response("Too many requests", { status: 429, headers: noStore() });
  }

  if (!(await authorized(request.headers.get("authorization"), password))) {
    return new Response("Authentication required", {
      status: 401,
      headers: { ...noStore(), "WWW-Authenticate": 'Basic realm="Leads", charset="UTF-8"' },
    });
  }

  const { results } = await db
    .prepare(`SELECT ${COLUMNS.join(", ")} FROM leads ORDER BY id DESC`)
    .all<Record<string, unknown>>();

  const lines = [COLUMNS.join(","), ...results.map((r) => COLUMNS.map((c) => cell(r[c])).join(","))];
  // BOM so Excel reads the file as UTF-8 (accents, ñ); CRLF per RFC 4180.
  const csv = "﻿" + lines.join("\r\n") + "\r\n";
  const date = new Date().toISOString().slice(0, 10);

  return new Response(csv, {
    status: 200,
    headers: {
      ...noStore(),
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${date}.csv"`,
    },
  });
};

function noStore() {
  return { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };
}

/** CSV cell: quoted, and neutralised so Excel never runs it as a formula. */
function cell(value: unknown): string {
  let s = value == null ? "" : String(value);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return `"${s.replace(/"/g, '""')}"`;
}

/** Constant-time check of the Basic auth password (the user name is ignored). */
async function authorized(header: string | null, expected: string): Promise<boolean> {
  if (!header?.startsWith("Basic ")) return false;
  let given = "";
  try {
    const decoded = new TextDecoder().decode(
      Uint8Array.from(atob(header.slice(6)), (c) => c.charCodeAt(0)),
    );
    given = decoded.slice(decoded.indexOf(":") + 1);
  } catch {
    return false;
  }
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(given)),
    crypto.subtle.digest("SHA-256", enc.encode(expected)),
  ]);
  const x = new Uint8Array(a);
  const y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}
