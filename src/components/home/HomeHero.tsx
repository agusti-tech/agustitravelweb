import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section aria-labelledby="home-hero-title" className="relative min-h-screen overflow-hidden">
      {/* Background image via next/image for LCP optimization */}
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1800&q=80"
        alt="Paisaje de viajes de ensueño — glaciares y lagos patagónicos"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[rgba(11,33,43,0.78)] to-[rgba(11,33,43,0.22)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-28 sm:py-36">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/90">
          Agusti Travel Co.
        </p>
        <h1
          id="home-hero-title"
          className="max-w-3xl tracking-tight text-white"
        >
          <span className="block text-5xl font-light sm:text-6xl md:text-7xl">Viajes a medida</span>
          <span className="block text-4xl font-semibold sm:text-5xl md:text-6xl">para descubrir el mundo</span>
          <span className="block text-4xl font-light italic sm:text-5xl md:text-6xl">con confianza y estilo.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Diseñamos experiencias personalizadas desde Marcos Juárez hacia
          destinos inolvidables en Argentina, Europa y más allá.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="rounded-2xl px-8 py-6 text-base">
            <Link href="/contacto">Comenzá Tu Viaje</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-2xl border-white/60 bg-white/10 px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            <Link href="/destinos">Explorar Destinos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
