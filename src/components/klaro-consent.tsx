"use client";

import { useEffect } from "react";

type KlaroApiLike = {
  setup: (config: Record<string, unknown>) => void;
  getManager?: () => unknown;
  show?: () => void;
  [key: string]: unknown;
};

type KlaroWindow = Window & {
  klaro?: KlaroApiLike;
};

export function KlaroConsent() {
  useEffect(() => {
    let mounted = true;

    void import("klaro").then((klaroModule) => {
      if (!mounted) return;

      const moduleRecord = klaroModule as unknown as Record<string, unknown>;
      const klaroApi = (moduleRecord.default ?? moduleRecord) as KlaroApiLike;

      // Klaro v0.7 no asigna window.klaro cuando se importa como módulo ESM,
      // así que lo exponemos para que getManager/show queden disponibles a
      // los componentes cliente.
      (window as KlaroWindow).klaro = klaroApi;

      klaroApi.setup({
        version: 1,
        elementID: "klaro",
        storageMethod: "cookie",
        cookieName: "agusti_consent",
        cookieExpiresAfterDays: 365,
        default: false,
        mustConsent: true,
        acceptAll: true,
        hideDeclineAll: false,
        htmlTexts: true,
        lang: "es",
        translations: {
          es: {
            consentModal: {
              title: "Configuración de cookies",
              description:
                "Usamos cookies opcionales para mejorar tu experiencia. Podés aceptarlas todas o elegir cuáles permitir. Podés cambiar tu decisión en cualquier momento desde el pie de página.",
            },
            consentNotice: {
              description:
                "Usamos cookies técnicas necesarias y opcionales (redes sociales y analítica). <a href='/privacidad'>Política de privacidad</a>.",
              learnMore: "Configurar",
            },
            ok: "Aceptar todas",
            acceptAll: "Aceptar todas",
            decline: "Solo necesarias",
            purposes: {
              analytics: "Analítica",
              marketing: "Redes sociales",
            },
            purposeItem: {
              service: "servicio",
              services: "servicios",
            },
          },
        },
        services: [
          {
            name: "instagram",
            title: "Instagram (contenido incrustado)",
            purposes: ["marketing"],
            required: false,
            default: false,
            cookies: [/^ig_/, /^mid$/, /^csrftoken$/],
            description:
              "Permite mostrar publicaciones y reels de Instagram en esta página.",
          },
          // Uncomment and configure when Google Analytics is added:
          // {
          //   name: "google-analytics",
          //   title: "Google Analytics",
          //   purposes: ["analytics"],
          //   required: false,
          //   default: false,
          //   cookies: [/^_ga/, /^_gid/, /^_gat/],
          // },
        ],
      });
    });

    return () => {
      mounted = false;
    };
  }, []);

  return null;
}
