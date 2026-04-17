import type { Metadata } from "next"

const siteUrl = "https://www.agustitravelco.com"

export const metadata: Metadata = {
  title: "Servicios | Agusti Travel Co.",
  description:
    "Descubrí los servicios de Agusti Travel Co.: itinerarios a medida, salidas grupales y experiencias exclusivas locales.",
  alternates: { canonical: `${siteUrl}/servicios` },
  openGraph: {
    title: "Servicios | Agusti Travel Co.",
    description:
      "Planificación personalizada para viajes de autor con acompañamiento antes, durante y después del viaje.",
    url: `${siteUrl}/servicios`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | Agusti Travel Co.",
    description:
      "Planificación personalizada para viajes de autor con acompañamiento antes, durante y después del viaje.",
  },
}

const services = [
  {
    title: "Itinerarios a medida",
    description:
      "Creamos viajes personalizados según objetivos, fechas, ritmo y presupuesto estimado.",
  },
  {
    title: "Salidas grupales curadas",
    description:
      "Propuestas con cupos limitados para compartir experiencias con organización integral.",
  },
  {
    title: "Experiencias exclusivas locales",
    description:
      "Sumamos actividades auténticas y acceso a recomendaciones de alto valor en cada destino.",
  },
  {
    title: "Asistencia y concierge",
    description:
      "Acompañamiento durante el viaje para resolver imprevistos y optimizar cada etapa.",
  },
]

export default function ServiciosPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Servicios
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Soluciones de viaje pensadas para vos
        </h1>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Nuestro enfoque combina asesoramiento humano, planificación detallada
          y una red de proveedores confiables en Argentina y Europa.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-foreground">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}
