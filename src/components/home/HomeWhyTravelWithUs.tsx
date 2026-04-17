import { Headset, MapPin, ShieldCheck, Handshake } from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

import { RevealOnScroll } from "@/components/reveal-on-scroll";

type Benefit = {
  title: string;
  description: string;
  Icon: ComponentType<{ size?: number; weight?: "regular" | "duotone" | "fill" | "bold" | "light" | "thin"; className?: string }>;
};

const benefits: Benefit[] = [
  {
    title: "Asesor dedicado",
    description:
      "Un especialista te acompaña antes, durante y después de cada etapa del viaje.",
    Icon: Headset,
  },
  {
    title: "Expertise local",
    description:
      "Conocemos en profundidad Argentina y España para recomendar lo mejor de cada lugar.",
    Icon: MapPin,
  },
  {
    title: "Soporte concierge",
    description:
      "Resolución ágil ante cambios de itinerario, asistencia y ajustes de último minuto.",
    Icon: ShieldCheck,
  },
  {
    title: "Confianza y respaldo",
    description:
      "Operación formal, atención personalizada y aliados seleccionados en destino.",
    Icon: Handshake,
  },
];

export function HomeWhyTravelWithUs() {
  return (
    <section
      aria-labelledby="por-que-viajar"
      className="bg-secondary/30 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <RevealOnScroll className="mb-10 flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Por qué viajar con nosotros
          </p>
          <h2 id="por-que-viajar" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Cuidamos cada detalle para que vivas un viaje{" "}
            <span className="font-light italic">sin fricciones</span>
          </h2>
        </RevealOnScroll>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, i) => (
            <RevealOnScroll key={benefit.title} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
              <article className="flex gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                <div className="mt-0.5 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <benefit.Icon size={20} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
