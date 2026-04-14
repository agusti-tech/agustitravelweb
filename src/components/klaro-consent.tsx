"use client";

import { useEffect } from "react";

export function KlaroConsent() {
  useEffect(() => {
    let mounted = true;

    void import("klaro").then((klaroModule) => {
      if (!mounted) return;

      const klaro = klaroModule as unknown as {
        setup: (config: Record<string, unknown>) => void;
      };

      klaro.setup({
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
                "Usamos cookies opcionales para mejorar tu experiencia. Podés cambiar tu decisión en cualquier momento.",
            },
            consentNotice: {
              description:
                "Este sitio usa cookies técnicas y opcionales para analítica. <a href='/privacidad'>Más información</a>.",
              learnMore: "Configurar",
            },
            ok: "Aceptar",
            acceptAll: "Aceptar todas",
            decline: "Solo necesarias",
            purposes: {
              analytics: "Analítica",
            },
          },
        },
        services: [
          {
            name: "analytics",
            title: "Cookies de analítica",
            purposes: ["analytics"],
            required: false,
            default: false,
            cookies: [/^_ga/, /^_gid/, /^_gat/],
          },
        ],
      });
    });

    return () => {
      mounted = false;
    };
  }, []);

  return null;
}
