import Image from "next/image"
import type { Metadata } from "next"

const siteUrl = "https://www.agustitravelco.com"

export const metadata: Metadata = {
  title: "Sobre nosotros | Agusti Travel Co.",
  description:
    "Conocé la historia y el enfoque de Agusti Travel Co., una agencia habilitada con operaciones en Argentina y España.",
  openGraph: {
    title: "Sobre nosotros | Agusti Travel Co.",
    description:
      "Agencia boutique especializada en viajes a medida, salidas grupales y asesoramiento personalizado.",
    url: `${siteUrl}/sobre-nosotros`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/equipo-agusti-travel.png",
        width: 1200,
        height: 800,
        alt: "Equipo de Agusti Travel Co.",
      },
    ],
  },
}

export default function SobreNosotrosPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Sobre nosotros
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Viajes a medida con mirada local y acompañamiento real
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          En Agusti Travel Co. diseñamos experiencias de viaje personalizadas
          para viajeros que valoran el detalle, la confianza y el servicio
          cercano.
        </p>
      </header>

      <figure className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src="/images/equipo-agusti-travel.png"
          alt="Equipo de Agusti Travel Co. en las oficinas de la agencia"
          width={1200}
          height={800}
          className="h-auto w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-600">
          El equipo de Agusti Travel Co.
        </figcaption>
      </figure>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Nuestra base
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Operamos desde Marcos Juárez, Córdoba, y acompañamos viajeros en
            toda Argentina.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Presencia en Europa
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            También trabajamos en Barcelona para brindar soporte cercano en
            destino y alianzas locales.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Filosofía de servicio
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Cada itinerario se planifica con criterio profesional, tiempos
            reales y selección de proveedores confiables.
          </p>
        </article>
      </section>
    </div>
  )
}
