import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

const siteUrl = "https://www.agustitravelco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/destinos",
    "/blog",
    "/contacto",
    "/sobre-nosotros",
    "/privacidad",
    "/servicios",
    "/salidas-grupales",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const destinationEntries: MetadataRoute.Sitemap = destinations.map(
    (destination) => ({
      url: `${siteUrl}/destinos/${destination.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const parsed = new Date(post.date);
    const lastModified = Number.isNaN(parsed.getTime()) ? new Date() : parsed;
    return {
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    };
  });

  return [...staticEntries, ...destinationEntries, ...blogEntries];
}
