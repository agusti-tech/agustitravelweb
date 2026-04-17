import type { Metadata } from "next"
import { departures } from "@/data/departures"

const siteUrl = "https://www.agustitravelco.com"

export const metadata: Metadata = {
  title: "Salidas grupales | Agusti Travel Co.",
  description:
    "Conocé las próximas salidas grupales de Agusti Travel Co. con fechas, duración y precios orientativos.",
  alternates: { canonical: `${siteUrl}/salidas-grupales` },
  openGraph: {
    title: "Salidas grupales | Agusti Travel Co.",
    description:
      "Programas grupales con cupos limitados y acompañamiento personalizado en cada etapa del viaje.",
    url: `${siteUrl}/salidas-grupales`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salidas grupales | Agusti Travel Co.",
    description:
      "Programas grupales con cupos limitados y acompañamiento personalizado en cada etapa del viaje.",
  },
}

export default function SalidasGrupalesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Salidas grupales
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Próximas experiencias con cupos limitados
        </h1>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Programas acompañados para viajeros que quieren compartir la
          experiencia sin resignar calidad, organización ni soporte.
        </p>
      </header>

      <section className="space-y-5">
        {departures.map((departure) => (
          <article
            key={departure.id}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {departure.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Destino: {departure.destination}
                </p>
              </div>
              <p className="text-sm font-medium text-primary">
                {departure.seats}
              </p>
            </div>

            <dl className="mt-5 grid gap-3 text-sm text-foreground/80 md:grid-cols-3">
              <div className="rounded-xl bg-muted/50 px-4 py-3">
                <dt className="text-muted-foreground">Fecha de salida</dt>
                <dd>{departure.startDate}</dd>
              </div>
              <div className="rounded-xl bg-muted/50 px-4 py-3">
                <dt className="text-muted-foreground">Duración</dt>
                <dd>{departure.duration}</dd>
              </div>
              <div className="rounded-xl bg-muted/50 px-4 py-3">
                <dt className="text-muted-foreground">Precio orientativo</dt>
                <dd>Desde {departure.startingPrice}</dd>
              </div>
            </dl>

            <a
              href="https://wa.me/5493472583255"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Consultar disponibilidad
            </a>
          </article>
        ))}
      </section>
    </div>
  )
}
