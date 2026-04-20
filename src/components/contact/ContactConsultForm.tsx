"use client";

import { useState, type FormEvent } from "react";

type Estado = "idle" | "loading" | "success" | "error";

function endpoint(): string {
  const base = process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim();
  if (base) return base.replace(/\/$/, "") + "/api/contact";
  return "/api/contact";
}

export function ContactConsultForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensajeEstado, setMensajeEstado] = useState(
    "Completá el formulario y te responderemos pronto.",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const sitio_web = String(data.get("sitio_web") || "").trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nombre || !emailValido || mensaje.length < 20) {
      setEstado("error");
      setMensajeEstado(
        "Revisá los datos: nombre, email válido y un mensaje de al menos 20 caracteres.",
      );
      return;
    }

    setEstado("loading");
    setMensajeEstado("Enviando…");

    try {
      const res = await fetch(endpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje, sitio_web }),
      });

      const body = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setEstado("error");
        setMensajeEstado(
          typeof body.error === "string"
            ? body.error
            : "No se pudo enviar la consulta. Probá de nuevo más tarde.",
        );
        return;
      }

      form.reset();
      setEstado("success");
      setMensajeEstado(
        "Gracias por tu consulta. Te responderemos a la brevedad por email o WhatsApp.",
      );
    } catch {
      setEstado("error");
      setMensajeEstado(
        "No hay conexión con el servidor de envío. Si estás en desarrollo local, usá `npm run pages:dev` o probá en el sitio publicado.",
      );
    }
  }

  const colorClase =
    estado === "success"
      ? "text-green-700"
      : estado === "error"
        ? "text-red-600"
        : "text-muted-foreground";

  return (
    <form className="relative mt-4 space-y-4" onSubmit={onSubmit} noValidate>
      <label className="block text-sm text-foreground/80">
        Nombre completo
        <input
          name="nombre"
          type="text"
          required
          maxLength={120}
          aria-required="true"
          disabled={estado === "loading"}
          className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary focus:ring-2 disabled:opacity-60"
        />
      </label>
      <label className="block text-sm text-foreground/80">
        Email
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          aria-required="true"
          disabled={estado === "loading"}
          className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary focus:ring-2 disabled:opacity-60"
        />
      </label>
      <label className="block text-sm text-foreground/80">
        Mensaje
        <textarea
          name="mensaje"
          rows={4}
          required
          minLength={20}
          maxLength={8000}
          aria-required="true"
          disabled={estado === "loading"}
          className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none ring-primary focus:ring-2 disabled:opacity-60"
        />
      </label>
      <div
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <input name="sitio_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        disabled={estado === "loading"}
        className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {estado === "loading" ? "Enviando…" : "Enviar consulta"}
      </button>
      <p
        role="alert"
        aria-live="polite"
        className={`mt-3 text-sm ${colorClase}`}
      >
        {mensajeEstado}
      </p>
    </form>
  );
}
