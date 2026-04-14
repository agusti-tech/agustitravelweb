import Link from "next/link";

import { Button } from "@/components/ui/button";
import { featuredDepartures } from "@/data/departures";

export function HomeFeaturedDepartures() {
  return (
    <section aria-labelledby="salidas-destacadas" className="bg-secondary/35 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Salidas grupales
          </p>
          <h2 id="salidas-destacadas" className="text-3xl font-semibold tracking-tight">
            Próximas experiencias destacadas
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredDepartures.map((departure) => (
            <article
              key={`${departure.destination}-${departure.date}`}
              className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                {departure.date}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{departure.destination}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Duración: {departure.duration}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Desde {departure.price}
              </p>
              <Button asChild className="mt-5 rounded-2xl">
                <Link href="/contacto">Consultar salida</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
