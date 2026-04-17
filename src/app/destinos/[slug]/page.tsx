import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { destinations, getDestinationBySlug } from "@/data/destinations"

const siteUrl = "https://www.agustitravelco.com"

type DestinationPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }))
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    return {
      title: "Destino no encontrado | Agusti Travel Co.",
      description: "El destino solicitado no se encuentra disponible.",
    }
  }

  const title = `${destination.name} | Agusti Travel Co.`
  const description = destination.shortDescription
  const url = `${siteUrl}/destinos/${destination.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Agusti Travel Co.",
      locale: "es_AR",
      type: "website",
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [destination.heroImage],
    },
  }
}

export default async function DestinationDetailPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.shortDescription,
    image: destination.heroImage,
    url: `${siteUrl}/destinos/${destination.slug}`,
    touristType: "Viajeros que buscan experiencias a medida",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Destinos", item: `${siteUrl}/destinos` },
      { "@type": "ListItem", position: 3, name: destination.name, item: `${siteUrl}/destinos/${destination.slug}` },
    ],
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
        <Image
          src={destination.heroImage}
          alt={`Paisaje principal de ${destination.name}`}
          width={1400}
          height={900}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="h-72 w-full object-cover md:h-96"
          priority
        />
        <div className="space-y-8 p-8">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Destino destacado
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              {destination.name}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground">
              {destination.shortDescription}
            </p>
          </header>

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-muted/50 p-5">
              <p className="text-sm text-muted-foreground">Duración sugerida</p>
              <p className="mt-1 text-lg font-medium text-foreground">
                {destination.suggestedDuration}
              </p>
            </div>
            <div className="rounded-2xl bg-muted/50 p-5">
              <p className="text-sm text-muted-foreground">Precio orientativo</p>
              <p className="mt-1 text-lg font-medium text-foreground">
                Desde {destination.startingPrice}
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Experiencias recomendadas
            </h2>
            <ul className="space-y-3 text-foreground/80">
              {destination.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl border border-border/70 bg-background px-4 py-3"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <a
            href="https://wa.me/5493472583255"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Consultar este destino por WhatsApp
          </a>
        </div>
      </article>
    </div>
  )
}
