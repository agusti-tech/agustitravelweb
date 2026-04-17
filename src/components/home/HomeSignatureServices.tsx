import { MapTrifold, UsersThree, Star } from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

import { RevealOnScroll } from "@/components/reveal-on-scroll";

type Service = {
  title: string;
  description: string;
  Icon: ComponentType<{ size?: number; weight?: "regular" | "duotone" | "fill" | "bold" | "light" | "thin"; className?: string }>;
};

const services: Service[] = [
  {
    title: "Itinerarios a medida",
    description:
      "Creamos viajes personalizados según tu ritmo, intereses y presupuesto.",
    Icon: MapTrifold,
  },
  {
    title: "Salidas grupales",
    description:
      "Propuestas acompañadas para viajar en grupo con seguridad y comodidad.",
    Icon: UsersThree,
  },
  {
    title: "Experiencias exclusivas locales",
    description:
      "Acceso a vivencias auténticas con foco en cultura, gastronomía y bienestar.",
    Icon: Star,
  },
];

export function HomeSignatureServices() {
  return (
    <section
      aria-labelledby="servicios-destacados"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-24"
    >
      <RevealOnScroll className="mb-10 flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
          Servicios de autor
        </p>
        <h2 id="servicios-destacados" className="text-3xl font-semibold tracking-tight md:text-4xl">
          Diseñamos cada viaje con mirada{" "}
          <span className="font-light italic">estratégica</span> y humana
        </h2>
      </RevealOnScroll>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, i) => (
          <RevealOnScroll key={service.title} delay={(i + 1) as 1 | 2 | 3}>
            <article className="group h-full rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.Icon size={22} weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
