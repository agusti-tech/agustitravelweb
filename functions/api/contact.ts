/**
 * Cloudflare Pages Function: recibe el formulario de contacto y envía email vía Resend.
 *
 * Variables de entorno en Cloudflare Pages (Settings → Environment variables):
 * - RESEND_API_KEY (secret)
 * - RESEND_FROM  remitente verificado en Resend, ej. "Agusti Travel Co <consultas@tudominio.com>"
 * - CONTACT_TO_EMAIL (opcional) destino; por defecto info@agustitravelco.com
 */

type ContactPayload = {
  nombre?: string
  email?: string
  mensaje?: string
  sitio_web?: string
}

type Env = {
  RESEND_API_KEY: string
  RESEND_FROM: string
  CONTACT_TO_EMAIL?: string
}

const DEFAULT_TO = "info@agustitravelco.com"

function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false
  try {
    const u = new URL(origin)
    if (u.protocol === "http:" && (u.hostname === "localhost" || u.hostname === "127.0.0.1")) {
      return true
    }
    if (u.hostname === "www.agustitravelco.com" || u.hostname === "agustitravelco.com") {
      return u.protocol === "https:"
    }
    if (u.hostname.endsWith(".pages.dev")) {
      return u.protocol === "https:"
    }
    return false
  } catch {
    return false
  }
}

function corsHeaders(request: Request): Headers {
  const origin = request.headers.get("Origin")
  const h = new Headers()
  h.set("Access-Control-Allow-Methods", "POST, OPTIONS")
  h.set("Access-Control-Allow-Headers", "Content-Type")
  h.set("Access-Control-Max-Age", "86400")
  if (origin && isOriginAllowed(origin)) {
    h.set("Access-Control-Allow-Origin", origin)
    h.set("Vary", "Origin")
  }
  return h
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function jsonResponse(
  request: Request,
  body: unknown,
  status: number,
): Response {
  const headers = corsHeaders(request)
  headers.set("Content-Type", "application/json; charset=utf-8")
  return new Response(JSON.stringify(body), { status, headers })
}

export async function onRequestOptions(context: {
  request: Request
}): Promise<Response> {
  return new Response(null, { status: 204, headers: corsHeaders(context.request) })
}

export async function onRequestPost(context: {
  request: Request
  env: Env
}): Promise<Response> {
  const { request, env } = context
  const origin = request.headers.get("Origin")
  if (!isOriginAllowed(origin)) {
    return jsonResponse(request, { error: "Origen no permitido." }, 403)
  }

  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    return jsonResponse(request, { error: "Content-Type inválido." }, 415)
  }

  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return jsonResponse(request, { error: "Cuerpo JSON inválido." }, 400)
  }

  if (payload.sitio_web && String(payload.sitio_web).trim() !== "") {
    return jsonResponse(request, { ok: true }, 200)
  }

  const nombre = String(payload.nombre ?? "").trim()
  const email = String(payload.email ?? "").trim()
  const mensaje = String(payload.mensaje ?? "").trim()
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  if (!nombre || nombre.length > 120 || !emailOk || email.length > 254) {
    return jsonResponse(request, { error: "Datos de contacto inválidos." }, 400)
  }
  if (mensaje.length < 20 || mensaje.length > 8000) {
    return jsonResponse(
      request,
      { error: "El mensaje debe tener entre 20 y 8000 caracteres." },
      400,
    )
  }

  const apiKey = env.RESEND_API_KEY
  const from = env.RESEND_FROM
  if (!apiKey || !from) {
    return jsonResponse(
      request,
      { error: "El servicio de correo no está configurado." },
      503,
    )
  }

  const to = (env.CONTACT_TO_EMAIL ?? DEFAULT_TO).trim() || DEFAULT_TO
  const subject = `Consulta web — ${nombre}`
  const html = `
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Mensaje:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(mensaje)}</p>
  `

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      html,
    }),
  })

  const resendBody = (await resendRes.json().catch(() => ({}))) as {
    message?: string
    id?: string
  }

  if (!resendRes.ok) {
    return jsonResponse(
      request,
      {
        error:
          typeof resendBody.message === "string"
            ? resendBody.message
            : "No se pudo enviar el correo.",
      },
      502,
    )
  }

  return jsonResponse(request, { ok: true, id: resendBody.id }, 200)
}
