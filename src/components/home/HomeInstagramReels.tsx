"use client";

import { useEffect } from "react";
import Script from "next/script";

import { instagramShowcase } from "@/data/instagram-showcase";

const PROFILE_URL = "https://www.instagram.com/agustitravelco/";

export function HomeInstagramReels() {
  useEffect(() => {
    if (instagramShowcase.length === 0) return;
    const id = window.setInterval(() => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
        window.clearInterval(id);
      }
    }, 120);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="instagram-title"
      className="border-y border-border/60 bg-secondary/25 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 text-center sm:mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
            Redes sociales
          </p>
          <h2
            id="instagram-title"
            className="text-3xl font-semibold tracking-tight text-foreground"
          >
            Instagram y reels
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
            Mirá novedades y viajes en nuestro perfil. Si agregamos enlaces abajo, se
            verán incrustados los reels o publicaciones que elijamos.
          </p>
          <div>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-primary/40 bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
            >
              Ver perfil @agustitravelco
            </a>
          </div>
        </div>

        {instagramShowcase.length > 0 ? (
          <>
            <div className="grid gap-8 md:grid-cols-2">
              {instagramShowcase.map((item) => (
                <div
                  key={item.url}
                  className="flex min-h-[480px] justify-center overflow-hidden rounded-2xl border border-border/70 bg-card p-2 shadow-sm"
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={item.url}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      borderRadius: "12px",
                      margin: "1px",
                      maxWidth: "540px",
                      minWidth: "260px",
                      padding: 0,
                      width: "calc(100% - 2px)",
                    }}
                  />
                </div>
              ))}
            </div>
            <Script
              src="https://www.instagram.com/embed.js"
              strategy="lazyOnload"
              onLoad={() => window.instgrm?.Embeds?.process()}
            />
          </>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            Pronto podremos mostrar reels elegidos acá. Mientras tanto, abrí el perfil
            de Instagram con el botón de arriba.
          </p>
        )}
      </div>
    </section>
  );
}
