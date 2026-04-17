import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { destinations } from "@/data/destinations";

export function HomeFeaturedDestinations() {
  return (
    <section
      aria-labelledby="destinos-destacados"
      className="bg-secondary/35 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <RevealOnScroll className="mb-10 flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Destinos destacados
          </p>
          <h2 id="destinos-destacados" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Inspiración <span className="font-light italic">editorial</span> para tu próximo viaje
          </h2>
        </RevealOnScroll>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, i) => (
            <RevealOnScroll key={destination.slug} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              <article className="group overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm h-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={destination.heroImage}
                    alt={`Vista de ${destination.name}`}
                    width={600}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                  <p className="text-xs leading-5 text-muted-foreground line-clamp-2">
                    {destination.shortDescription}
                  </p>
                  <Button asChild variant="ghost" className="rounded-2xl px-0 text-primary text-sm">
                    <Link href={`/destinos/${destination.slug}`}>Ver destino →</Link>
                  </Button>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
