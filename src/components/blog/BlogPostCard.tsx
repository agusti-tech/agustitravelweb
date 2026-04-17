import Image from "next/image"
import Link from "next/link"

import type { BlogPost } from "@/data/posts"

type BlogPostCardProps = {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[16/9] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={700}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {new Date(post.date).toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="text-2xl font-semibold text-foreground">{post.title}</h2>
        <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Leer artículo
        </Link>
      </div>
    </article>
  )
}
