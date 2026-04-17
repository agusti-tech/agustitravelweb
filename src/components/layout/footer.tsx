import Link from "next/link";
import { InstagramLogo, WhatsappLogo, EnvelopeSimple, Globe } from "@phosphor-icons/react/dist/ssr";

import { SiteBrand } from "@/components/layout/site-brand";
import { CookieButton } from "@/components/layout/cookie-button";
import { googleBusinessReviewsUrl } from "@/data/google-reviews";

const navLinks = [
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

export function Footer() {
  const googleReviewsHref = googleBusinessReviewsUrl.trim();

  return (
    <footer className="mt-20 border-t border-border/70 bg-card">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <SiteBrand variant="footer" />
          <p className="max-w-md text-sm text-muted-foreground">
            Diseñamos itinerarios a medida con una mirada editorial y acompañamiento
            personalizado para cada viaje.
          </p>
          <p className="text-sm text-foreground/90">
            Marcos Juárez, Córdoba, Argentina · Operamos también en Barcelona, España
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://instagram.com/agustitravelco"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Agusti Travel Co."
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <InstagramLogo size={18} weight="duotone" aria-hidden />
            </a>
            <a
              href="https://wa.me/5493472583255"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp de Agusti Travel Co."
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <WhatsappLogo size={18} weight="duotone" aria-hidden />
            </a>
            <a
              href="mailto:info@agustitravelco.com"
              aria-label="Email de Agusti Travel Co."
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <EnvelopeSimple size={18} weight="duotone" aria-hidden />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-heading text-lg text-foreground">Navegación</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="font-heading text-lg text-foreground">Conócenos</p>
          <ul className="space-y-2">
            {conocenosLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="font-heading text-lg text-foreground">Contacto</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <EnvelopeSimple size={14} weight="duotone" aria-hidden className="shrink-0" />
              <a href="mailto:info@agustitravelco.com" className="transition-colors hover:text-primary">
                info@agustitravelco.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={14} weight="duotone" aria-hidden className="shrink-0" />
              <a href="https://www.agustitravelco.com" className="transition-colors hover:text-primary">
                www.agustitravelco.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsappLogo size={14} weight="duotone" aria-hidden className="shrink-0" />
              <a
                href="https://wa.me/5493472583255"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                +54 9 3472 583255
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramLogo size={14} weight="duotone" aria-hidden className="shrink-0" />
              <a
                href="https://instagram.com/agustitravelco"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                @agustitravelco
              </a>
            </li>
            {googleReviewsHref ? (
              <li>
                <a
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Reseñas en Google
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Agusti Travel Co. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/privacidad" className="underline underline-offset-2 transition-colors hover:text-primary">
              Privacidad
            </Link>
            <span aria-hidden="true">·</span>
            <CookieButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
