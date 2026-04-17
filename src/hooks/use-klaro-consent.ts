"use client";

import { useEffect, useState } from "react";

type KlaroWindow = Window & {
  klaro?: {
    getManager?: () => {
      getConsent: (serviceName: string) => boolean;
      watch: (watcher: { update: (manager: unknown, eventType: string) => void }) => void;
    };
  };
};

export function useKlaroConsent(serviceName: string): boolean {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const w = window as KlaroWindow;
    let lastConsentCookie = "";

    const checkConsent = () => {
      const consent = w.klaro?.getManager?.()?.getConsent(serviceName) ?? false;
      setHasConsent(consent);
    };

    // Poll briefly after mount to let Klaro initialize.
    const bootstrapId = setInterval(() => {
      if (w.klaro?.getManager) {
        checkConsent();
        clearInterval(bootstrapId);
      }
    }, 100);

    const bootstrapTimeoutId = setTimeout(() => clearInterval(bootstrapId), 8000);

    // Keep consent in sync after the user updates choices in Klaro.
    // We compare the consent cookie and re-check only when it changes.
    const syncId = setInterval(() => {
      const cookie = document.cookie
        .split("; ")
        .find((part) => part.startsWith("agusti_consent=")) ?? "";

      if (cookie !== lastConsentCookie) {
        lastConsentCookie = cookie;
        checkConsent();
      }
    }, 500);

    return () => {
      clearInterval(bootstrapId);
      clearTimeout(bootstrapTimeoutId);
      clearInterval(syncId);
    };
  }, [serviceName]);

  return hasConsent;
}
