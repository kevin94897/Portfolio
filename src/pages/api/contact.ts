export const prerender = false;

import type { APIRoute } from "astro";

const BREVO_API = "https://api.brevo.com/v3";
const LIST_ID = 2; // Lista Portfolio
const NOTIFY_EMAIL = "kevin94897@gmail.com";
const SENDER = { name: "Kevin Gómez Portfolio", email: "noreply@kevin-gomez.dev" };

export const POST: APIRoute = async ({ request, locals }) => {
  // import.meta.env works locally; Cloudflare runtime env works in production
  const runtime = (locals as any).runtime;
  const apiKey: string | undefined =
    import.meta.env.BREVO_API_KEY ?? runtime?.env?.BREVO_API_KEY;
  if (!apiKey) {
    return json({ ok: false, error: "Server misconfigured" }, 500);
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
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

  const esc = (s: string) =>
    s.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
    );

  const headers = {
    "api-key": apiKey,
    "Content-Type": "application/json",
    accept: "application/json",
  };

  // 1. Add / update contact in Brevo list
  const contactRes = await fetch(`${BREVO_API}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      attributes: {
        NOMBRE: nombre,
        APELLIDOS: apellidos ?? "",
        ASUNTO: asunto,
        MESSAGE: message ?? "",
      },
      listIds: [LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!contactRes.ok && contactRes.status !== 204) {
    const err = await contactRes.text();
    return json({ ok: false, error: `Brevo contact error: ${err}` }, 502);
  }

  // 2. Send notification email to owner
  const emailBody = `
<p><strong>Nombre:</strong> ${esc(nombre)} ${esc(apellidos)}</p>
<p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
<p><strong>Asunto:</strong> ${esc(asunto)}</p>
${message ? `<p><strong>Mensaje:</strong></p><p>${esc(message).replace(/\n/g, "<br>")}</p>` : ""}
`.trim();

  const notifyRes = await fetch(`${BREVO_API}/smtp/email`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      sender: SENDER,
      to: [{ email: NOTIFY_EMAIL, name: "Kevin Gómez" }],
      replyTo: { email, name: `${nombre} ${apellidos ?? ""}`.trim() },
      subject: `Portfolio Lead: ${asunto}`,
      htmlContent: `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#222;">${emailBody}</body></html>`,
    }),
  });

  if (!notifyRes.ok) {
    // Contact was saved; only notification failed — still a partial success
    return json({ ok: true, warn: "Notification email failed" }, 200);
  }

  return json({ ok: true }, 200);
};

function json(data: object, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
