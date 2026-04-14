import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const featuredDestinations = [
  {
    name: "Patagonia",
    description: "Glaciares, lagos y paisajes imponentes en el sur argentino.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "España",
    description:
      "Barcelona, Madrid y Andalucía para una experiencia cultural completa.",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73426?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Italia",
    description:
      "Roma, Toscana y Costa Amalfitana entre historia, sabores y mar.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
  },
];

export function HomeFeaturedDestinations() {
  return (
    <section
      aria-labelledby="destinos-destacados"
      className="bg-secondary/35 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Destinos destacados
          </p>
          <h2 id="destinos-destacados" className="text-3xl font-semibold tracking-tight">
            Inspiración editorial para tu próximo viaje
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredDestinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">{destination.name}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {destination.description}
                </p>
                <Button asChild variant="ghost" className="rounded-2xl px-0 text-primary">
                  <Link href="/destinos">Ver destino</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
