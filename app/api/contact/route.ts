import { NextResponse } from "next/server";

export const runtime = "nodejs";

const requests = new Map<string, number[]>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requests.get(ip) ?? []).filter((time) => now - time < 15 * 60 * 1000);
  if (recent.length >= 5) return true;
  recent.push(now);
  requests.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return NextResponse.json({ error: "Odeslali jste příliš mnoho zpráv. Zkuste to prosím později." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Neplatná data formuláře." }, { status: 400 }); }

  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const place = clean(body.place, 160);
  const message = clean(body.message, 5000);
  const consent = body.consent === true;

  if (!firstName || !lastName || !phone || !emailPattern.test(email) || !place || !message || !consent) {
    return NextResponse.json({ error: "Vyplňte prosím správně všechna povinná pole." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    console.error("Contact form: missing RESEND_API_KEY");
    return NextResponse.json({ error: "Odesílání zpráv zatím není nakonfigurované. Kontaktujte nás prosím e-mailem." }, { status: 503 });
  }

  const recipient = process.env.CONTACT_TO_EMAIL || "odhadyvachuska@gmail.com";
  const sender = process.env.CONTACT_FROM_EMAIL || "SUNPOWER web <onboarding@resend.dev>";
  const safe = { firstName: escapeHtml(firstName), lastName: escapeHtml(lastName), phone: escapeHtml(phone), email: escapeHtml(email), place: escapeHtml(place), message: escapeHtml(message).replace(/\n/g, "<br>") };
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `Nová poptávka SUNPOWER – ${firstName} ${lastName}`,
      html: `<h2>Nová poptávka z webu SUNPOWER</h2><p><strong>Jméno:</strong> ${safe.firstName} ${safe.lastName}</p><p><strong>Telefon:</strong> <a href="tel:${safe.phone}">${safe.phone}</a></p><p><strong>E-mail:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p><p><strong>Místo realizace:</strong> ${safe.place}</p><p><strong>Zpráva:</strong><br>${safe.message}</p><hr><p><small>Odesílatel potvrdil souhlas ve formuláři na sunpower.cz.</small></p>`,
      text: `Nová poptávka z webu SUNPOWER\n\nJméno: ${firstName} ${lastName}\nTelefon: ${phone}\nE-mail: ${email}\nMísto realizace: ${place}\n\nZpráva:\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Contact form: Resend rejected request", response.status, await response.text());
    return NextResponse.json({ error: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište e-mailem." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
