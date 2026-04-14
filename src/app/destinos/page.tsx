import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"

import { destinations } from "@/data/destinations"

const siteUrl = "https://www.agustitravelco.com"

export const metadata: Metadata = {
  title: "Destinos a medida | Agusti Travel Co.",
  description:
    "Explora destinos seleccionados por Agusti Travel Co. con itinerarios personalizados para viajar con estilo y tranquilidad.",
  openGraph: {
    title: "Destinos a medida | Agusti Travel Co.",
    description:
      "Descubrí Patagonia, España, Italia y Europa clásica con asesoramiento experto y planificación personalizada.",
    url: `${siteUrl}/destinos`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
}

export default function DestinosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Destinos
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Viajes diseñados para cada estilo
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          Curamos experiencias en destinos icónicos para que vivas cada viaje
          con una planificación clara, alojamientos seleccionados y asistencia
          personalizada.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {destinations.map((destination) => (
          <article
            key={destination.slug}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <Image
              src={destination.heroImage}
              alt={`Vista destacada de ${destination.name}`}
              width={1200}
              height={700}
              className="h-52 w-full object-cover"
            />
            <div className="space-y-4 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                {destination.name}
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                {destination.shortDescription}
              </p>
              <div className="flex items-center justify-between text-sm text-slate-700">
                <span>Duración sugerida: {destination.suggestedDuration}</span>
                <span>Desde {destination.startingPrice}</span>
              </div>
              <Link
                href={`/destinos/${destination.slug}`}
                className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
              >
                Ver detalle
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
