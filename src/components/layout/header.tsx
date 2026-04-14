import Link from "next/link";

import { SiteBrand } from "@/components/layout/site-brand";

const mainNavLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/destinos", label: "Destinos" },
  { href: "/blog", label: "Blog" },
  { href: "/salidas-grupales", label: "Salidas grupales" },
  { href: "/contacto", label: "Contacto" },
];

const conocenosLinks = [
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/privacidad", label: "Política de privacidad" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <SiteBrand variant="header" />

        <nav className="hidden items-center gap-5 md:flex lg:gap-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/90 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <details className="group relative">
            <summary className="cursor-pointer list-none text-sm text-foreground/90 transition-colors marker:hidden hover:text-primary [&::-webkit-details-marker]:hidden">
              Conócenos
            </summary>
            <div className="absolute right-0 z-50 mt-2 min-w-56 rounded-2xl border border-border bg-card p-2 shadow-soft">
              {conocenosLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-2xl border border-primary/40 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 md:inline-flex"
        >
          Comenzá tu viaje
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-xl border border-border px-3 py-2 text-sm text-foreground transition hover:border-primary/40 hover:text-primary">
            Menú
          </summary>
          <div className="absolute right-0 mt-2 flex max-h-[min(70vh,28rem)] min-w-52 flex-col gap-1 overflow-y-auto rounded-2xl border border-border bg-card p-2 shadow-soft">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Conócenos
            </p>
            {conocenosLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-1 rounded-xl bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Comenzá tu viaje
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
