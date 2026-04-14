import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import "server-only";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
}

function normalizePostDate(data: Record<string, unknown>): string {
  const raw = data.date;
  if (raw instanceof Date) {
    return raw.toISOString().slice(0, 10);
  }
  if (typeof raw === "string") {
    return raw;
  }
  return "";
}

function loadPostsFromMarkdown(): BlogPost[] {
  const dir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter(
      (f) =>
        f.endsWith(".md") &&
        !f.startsWith("_") &&
        f.toLowerCase() !== "readme.md"
    );

  const posts: BlogPost[] = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const slugFromFile = file.replace(/\.md$/, "");
    const slug =
      typeof data.slug === "string" && data.slug.length > 0
        ? data.slug
        : slugFromFile;

    posts.push({
      slug,
      title: String(data.title ?? ""),
      excerpt: String(data.excerpt ?? ""),
      coverImage: String(data.coverImage ?? ""),
      date: normalizePostDate(data),
      author: String(data.author ?? ""),
      content: content.trim(),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    });
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export const posts = loadPostsFromMarkdown();

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
