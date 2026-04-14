import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section aria-labelledby="home-hero-title" className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11, 33, 43, 0.75), rgba(11, 33, 43, 0.2)), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 sm:py-28">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/90">
          Agusti Travel Co.
        </p>
        <h1
          id="home-hero-title"
          className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Viajes a medida para descubrir el mundo con confianza y estilo.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
          Diseñamos experiencias personalizadas desde Marcos Juárez hacia
          destinos inolvidables en Argentina, Europa y más allá.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="rounded-2xl px-6">
            <Link href="/contacto">Comenzá Tu Viaje</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-2xl border-white/60 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/destinos">Explorar Destinos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
