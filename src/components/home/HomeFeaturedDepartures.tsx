"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  getFeaturedDepartures,
  MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW,
  type Departure,
  type FeaturedDeparture,
} from "@/data/departures";

type HomeFeaturedDeparturesProps = {
  departures: Departure[];
};

export function HomeFeaturedDepartures({ departures: allDepartures }: HomeFeaturedDeparturesProps) {
  const [featured, setFeatured] = useState<FeaturedDeparture[] | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setFeatured(
        getFeaturedDepartures(new Date(), 3, MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW, allDepartures),
      );
    });
    return () => cancelAnimationFrame(id);
  }, [allDepartures]);

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
          <p className="max-w-2xl text-sm text-muted-foreground">
            Mostramos las tres salidas con fecha más cercana (ocultamos las que quedan a menos de{" "}
            {MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW} días).
          </p>
        </div>
        {featured === null ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-56 animate-pulse rounded-2xl border border-border/40 bg-muted/40"
              />
            ))}
          </div>
        ) : featured.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No hay salidas para mostrar en este momento. Consultanos por WhatsApp o el formulario de
            contacto para próximas fechas.
          </p>
        ) : (
          <div className="grid gap-4 lg:grid-cols-3">
            {featured.map((departure) => (
              <article
                key={departure.id}
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
                  {departure.price.toLowerCase().startsWith("desde")
                    ? departure.price
                    : `Desde ${departure.price}`}
                </p>
                <Button asChild className="mt-5 rounded-2xl">
                  <Link href="/contacto">Consultar salida</Link>
                </Button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
