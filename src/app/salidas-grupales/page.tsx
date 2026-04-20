import type { Metadata } from "next";

import { SalidasGrupalesList } from "@/components/salidas-grupales/SalidasGrupalesList";

const siteUrl = "https://www.agustitravelco.com";

export const metadata: Metadata = {
  title: "Salidas grupales | Agusti Travel Co.",
  description:
    "Conocé las próximas salidas grupales de Agusti Travel Co. con fechas, duración y precios orientativos.",
  alternates: { canonical: `${siteUrl}/salidas-grupales` },
  openGraph: {
    title: "Salidas grupales | Agusti Travel Co.",
    description:
      "Programas grupales con cupos limitados y acompañamiento personalizado en cada etapa del viaje.",
    url: `${siteUrl}/salidas-grupales`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salidas grupales | Agusti Travel Co.",
    description:
      "Programas grupales con cupos limitados y acompañamiento personalizado en cada etapa del viaje.",
  },
};

export default function SalidasGrupalesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Salidas grupales</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Próximas experiencias con cupos limitados
        </h1>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          Programas acompañados para viajeros que quieren compartir la experiencia sin resignar
          calidad, organización ni soporte.
        </p>
      </header>

      <SalidasGrupalesList />
    </div>
  );
}
