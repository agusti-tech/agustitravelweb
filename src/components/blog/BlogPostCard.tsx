import Image from "next/image"
import Link from "next/link"

import type { BlogPost } from "@/data/posts"

type BlogPostCardProps = {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Image
        src={post.coverImage}
        alt={post.title}
        width={1200}
        height={700}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-4 p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {new Date(post.date).toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
        <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
        >
          Leer artículo
        </Link>
      </div>
    </article>
  )
}
