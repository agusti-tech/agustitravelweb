import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HomeConsultationBand() {
  return (
    <section
      aria-labelledby="consulta-cta"
      className="bg-gradient-to-r from-primary to-[#008ecc] text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:items-center sm:justify-between md:flex-row">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Planificación personalizada
          </p>
          <h2 id="consulta-cta" className="mt-2 text-2xl font-semibold tracking-tight">
            ¿Listo para empezar tu próximo viaje?
          </h2>
          <p className="mt-2 text-sm text-white">
            Te asesoramos por WhatsApp o desde nuestro formulario de consulta.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="rounded-2xl border border-transparent"
          >
            <a href="https://wa.me/5493472583255" target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-2xl border-white/70 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/contacto">Solicitar consulta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
