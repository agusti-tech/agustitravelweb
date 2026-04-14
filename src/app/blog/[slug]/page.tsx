import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getPostBySlug, posts } from "@/data/posts"

const siteUrl = "https://www.agustitravelco.com"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.trim().split("\n")
  const html: string[] = []
  let inList = false

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      if (inList) {
        html.push("</ul>")
        inList = false
      }
      continue
    }

    if (line.startsWith("# ")) {
      if (inList) {
        html.push("</ul>")
        inList = false
      }
      html.push(`<h1>${escapeHtml(line.slice(2))}</h1>`)
      continue
    }

    if (line.startsWith("## ")) {
      if (inList) {
        html.push("</ul>")
        inList = false
      }
      html.push(`<h2>${escapeHtml(line.slice(3))}</h2>`)
      continue
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html.push("<ul>")
        inList = true
      }
      html.push(`<li>${escapeHtml(line.slice(2))}</li>`)
      continue
    }

    if (inList) {
      html.push("</ul>")
      inList = false
    }
    html.push(`<p>${escapeHtml(line)}</p>`)
  }

  if (inList) {
    html.push("</ul>")
  }

  return html.join("")
}

export const dynamicParams = false

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | Agusti Travel Co.",
      description: "El artículo solicitado no se encuentra disponible.",
    }
  }

  const url = `${siteUrl}/blog/${post.slug}`

  return {
    title: `${post.title} | Blog Agusti Travel Co.`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Blog Agusti Travel Co.`,
      description: post.excerpt,
      url,
      siteName: "Agusti Travel Co.",
      locale: "es_AR",
      type: "article",
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleUrl = `${siteUrl}/blog/${post.slug}`
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Agusti Travel Co.",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
  }

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {post.title}
        </h1>
        <p className="text-sm text-slate-600">
          {new Date(post.date).toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          · {post.author}
        </p>
      </header>

      <Image
        src={post.coverImage}
        alt={post.title}
        width={1400}
        height={840}
        className="mt-8 h-72 w-full rounded-2xl object-cover md:h-96"
        priority
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <section
        className="prose prose-slate mt-8 max-w-none prose-headings:font-heading prose-h1:text-3xl prose-h2:text-2xl"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
      />
    </article>
  )
}
