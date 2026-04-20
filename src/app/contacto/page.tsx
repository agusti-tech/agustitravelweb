import type { Metadata } from "next";

import { ContactConsultForm } from "@/components/contact/ContactConsultForm";

const siteUrl = "https://www.agustitravelco.com";

export const metadata: Metadata = {
  title: "Contacto y asesoramiento | Agusti Travel Co.",
  description:
    "Solicitá una consulta personalizada con Agusti Travel Co. y comenzá a planificar tu próximo viaje a medida.",
  alternates: { canonical: `${siteUrl}/contacto` },
  openGraph: {
    title: "Contacto y asesoramiento | Agusti Travel Co.",
    description:
      "Completa el formulario de consulta y recibí propuesta personalizada para tu viaje.",
    url: `${siteUrl}/contacto`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto y asesoramiento | Agusti Travel Co.",
    description:
      "Completa el formulario de consulta y recibí propuesta personalizada para tu viaje.",
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Contacto
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Planifiquemos tu próximo viaje
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Contanos qué tipo de experiencia querés vivir y armamos una propuesta
          a medida para vos.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">
            Datos de contacto
          </h2>
          <ul className="mt-4 space-y-3 text-foreground/80">
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

        <article className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">
            Formulario de consulta
          </h2>
          <ContactConsultForm />
        </article>
      </section>
    </div>
  );
}
