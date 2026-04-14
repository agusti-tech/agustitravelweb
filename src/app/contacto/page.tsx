import type { Metadata } from "next"

const siteUrl = "https://www.agustitravelco.com"

export const metadata: Metadata = {
  title: "Contacto y asesoramiento | Agusti Travel Co.",
  description:
    "Solicitá una consulta personalizada con Agusti Travel Co. y comenzá a planificar tu próximo viaje a medida.",
  openGraph: {
    title: "Contacto y asesoramiento | Agusti Travel Co.",
    description:
      "Completa el formulario de consulta y recibí propuesta personalizada para tu viaje.",
    url: `${siteUrl}/contacto`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
}

export default function ContactoPage() {
  const clientSideValidationScript = `
    (() => {
      const form = document.getElementById("contacto-form");
      const message = document.getElementById("contacto-estado");
      if (!form || !message) return;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const nombre = String(data.get("nombre") || "").trim();
        const email = String(data.get("email") || "").trim();
        const mensaje = String(data.get("mensaje") || "").trim();
        const emailValido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

        if (!nombre || !emailValido || mensaje.length < 20) {
          message.textContent =
            "Revisá los datos: nombre, email válido y un mensaje de al menos 20 caracteres.";
          message.className = "mt-3 text-sm text-red-600";
          return;
        }

        form.reset();
        message.textContent =
          "Gracias por tu consulta. Te responderemos a la brevedad por email o WhatsApp.";
        message.className = "mt-3 text-sm text-green-700";
      });
    })();
  `

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Contacto
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Planifiquemos tu próximo viaje
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Contanos qué tipo de experiencia querés vivir y armamos una propuesta
          a medida para vos.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Datos de contacto
          </h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/5493472583255"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-2"
              >
                +54 9 3472 583255
              </a>
            </li>
            <li>Email: info@agustitravelco.com</li>
            <li>Base operativa: Marcos Juárez, Córdoba, Argentina</li>
            <li>Operaciones: Barcelona, España</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Formulario de consulta
          </h2>
          <form id="contacto-form" className="mt-4 space-y-4">
            <label className="block text-sm text-slate-700">
              Nombre completo
              <input
                name="nombre"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
              />
            </label>
            <label className="block text-sm text-slate-700">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
              />
            </label>
            <label className="block text-sm text-slate-700">
              Mensaje
              <textarea
                name="mensaje"
                rows={4}
                required
                minLength={20}
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-primary focus:ring-2"
              />
            </label>
            <button
              type="submit"
              className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              Enviar consulta
            </button>
            <p id="contacto-estado" className="mt-3 text-sm text-slate-500">
              Completa el formulario y te responderemos pronto.
            </p>
          </form>
        </article>
      </section>

      <script dangerouslySetInnerHTML={{ __html: clientSideValidationScript }} />
    </div>
  )
}
