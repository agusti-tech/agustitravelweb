"use client";

import { useEffect, useState } from "react";

import {
  departuresTariffNote,
  getVisibleDepartures,
  MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW,
  type Departure,
} from "@/data/departures";

export function SalidasGrupalesList() {
  const [visible, setVisible] = useState<Departure[] | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(getVisibleDepartures(new Date()));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (visible === null) {
    return (
      <div className="space-y-5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-48 animate-pulse rounded-2xl border border-border/40 bg-muted/40"
          />
        ))}
      </div>
    );
  }

  if (visible.length === 0) {
    return (
      <div className="space-y-4">
        <p className="rounded-2xl border border-border/70 bg-card p-6 text-sm text-muted-foreground shadow-sm">
          No hay salidas publicadas con más de {MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW} días de
          anticipación. Escribinos por WhatsApp o el formulario de contacto para consultar
          programas y fechas.
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">{departuresTariffNote}</p>
      </div>
    );
  }

  return (
    <>
      <p className="mb-6 text-sm text-muted-foreground">
        No listamos salidas con menos de {MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW} días de anticipación.
      </p>
      <section className="space-y-5">
        {visible.map((departure) => (
          <article
            key={departure.id}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">{departure.title}</h2>
                <p className="text-sm text-muted-foreground">Destino: {departure.destination}</p>
              </div>
              <p className="text-sm font-medium text-primary">{departure.seats}</p>
            </div>

            <dl className="mt-5 grid gap-3 text-sm text-foreground/80 md:grid-cols-3">
              <div className="rounded-xl bg-muted/50 px-4 py-3">
                <dt className="text-muted-foreground">Fecha de salida</dt>
                <dd className="whitespace-pre-line">{departure.startDate}</dd>
              </div>
              <div className="rounded-xl bg-muted/50 px-4 py-3">
                <dt className="text-muted-foreground">Duración</dt>
                <dd>{departure.duration}</dd>
              </div>
              <div className="rounded-xl bg-muted/50 px-4 py-3">
                <dt className="text-muted-foreground">Precio orientativo</dt>
                <dd className="whitespace-pre-line">Desde {departure.startingPrice}</dd>
              </div>
            </dl>

            {departure.itinerary ? (
              <div className="mt-4 text-sm text-foreground/85">
                <p className="font-medium text-foreground">Itinerario</p>
                <p className="mt-1 leading-relaxed">{departure.itinerary}</p>
              </div>
            ) : null}

            {departure.highlights ? (
              <div className="mt-3 text-sm text-foreground/85">
                <p className="font-medium text-foreground">Incluye</p>
                <p className="mt-1 leading-relaxed">{departure.highlights}</p>
              </div>
            ) : null}

            <a
              href="https://wa.me/5493472583255"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Consultar disponibilidad
            </a>
          </article>
        ))}
      </section>
      <p className="mt-10 text-xs leading-relaxed text-muted-foreground">{departuresTariffNote}</p>
    </>
  );
}
