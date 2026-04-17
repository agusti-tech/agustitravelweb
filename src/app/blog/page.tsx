import type { Metadata } from "next"

import { BlogPostCard } from "@/components/blog/BlogPostCard"
import { posts } from "@/data/posts"

const siteUrl = "https://www.agustitravelco.com"

export const metadata: Metadata = {
  title: "Blog de viajes | Agusti Travel Co.",
  description:
    "Consejos, rutas e inspiración para planificar viajes a medida con información práctica y curada por especialistas.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "Blog de viajes | Agusti Travel Co.",
    description:
      "Leé artículos sobre planificación, destinos y experiencias para tu próximo viaje.",
    url: `${siteUrl}/blog`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de viajes | Agusti Travel Co.",
    description:
      "Leé artículos sobre planificación, destinos y experiencias para tu próximo viaje.",
  },
}

const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Ideas, consejos y rutas para viajar mejor
        </h1>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Compartimos contenidos para ayudarte a tomar mejores decisiones al
          planificar tu próximo viaje.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {sortedPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  )
}
