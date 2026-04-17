"use client";

import { useState, useRef, useEffect } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <SiteBrand variant="header" />

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden items-center gap-5 md:flex lg:gap-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/90 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          {/* Desktop dropdown — Conócenos */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-controls="conocenos-menu"
              onClick={() => setDropdownOpen((v) => !v)}
              className="cursor-pointer text-sm text-foreground/90 transition-colors hover:text-primary"
            >
              Conócenos
            </button>
            {dropdownOpen && (
              <div
                id="conocenos-menu"
                role="menu"
                className="absolute right-0 z-50 mt-2 min-w-56 rounded-2xl border border-border bg-card p-2 shadow-soft"
              >
                {conocenosLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-muted hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-2xl border border-primary/40 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 md:inline-flex"
        >
          Comenzá tu viaje
        </Link>

        {/* Mobile menu */}
        <div ref={mobileRef} className="relative md:hidden">
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-haspopup="true"
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileOpen((v) => !v)}
            className="cursor-pointer rounded-xl border border-border px-3 py-2 text-sm text-foreground transition hover:border-primary/40 hover:text-primary"
          >
            {mobileOpen ? "Cerrar" : "Menú"}
          </button>
          {mobileOpen && (
            <nav
              id="mobile-menu"
              aria-label="Navegación móvil"
              className="absolute right-0 mt-2 flex max-h-[min(70vh,28rem)] min-w-52 flex-col gap-1 overflow-y-auto rounded-2xl border border-border bg-card p-2 shadow-soft"
            >
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
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
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-xl bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Comenzá tu viaje
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
