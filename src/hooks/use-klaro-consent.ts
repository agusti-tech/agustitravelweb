"use client";

import { useEffect, useState } from "react";

type KlaroManager = {
  getConsent: (serviceName: string) => boolean;
  watch: (watcher: { update: (manager: unknown, eventType: string) => void }) => void;
};

type KlaroWindow = Window & {
  klaro?: {
    getManager?: () => KlaroManager;
  };
};

export function useKlaroConsent(serviceName: string): boolean {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const w = window as KlaroWindow;
    let watcherAttached = false;
    let lastCookie = "";

    const readConsent = () => {
      try {
        const consent = w.klaro?.getManager?.()?.getConsent(serviceName) ?? false;
        setHasConsent(consent);
      } catch {
        setHasConsent(false);
      }
    };

    const attachWatcher = () => {
      if (watcherAttached) return;
      const manager = w.klaro?.getManager?.();
      if (!manager) return;

      manager.watch({
        update: (_manager, eventType) => {
          if (eventType === "consents") readConsent();
        },
      });
      watcherAttached = true;
    };

    const bootstrapId = setInterval(() => {
      if (w.klaro?.getManager) {
        readConsent();
        attachWatcher();
        clearInterval(bootstrapId);
      }
    }, 100);

    const bootstrapTimeoutId = setTimeout(() => clearInterval(bootstrapId), 8000);

    // Fallback: si Klaro aún no existe o el watcher no dispara, releemos el
    // consentimiento cuando detectamos cambios en la cookie del consent manager.
    const cookieSyncId = setInterval(() => {
      const cookie =
        document.cookie
          .split("; ")
          .find((part) => part.startsWith("agusti_consent=")) ?? "";

      if (cookie !== lastCookie) {
        lastCookie = cookie;
        attachWatcher();
        readConsent();
      }
    }, 500);

    return () => {
      clearInterval(bootstrapId);
      clearTimeout(bootstrapTimeoutId);
      clearInterval(cookieSyncId);
    };
  }, [serviceName]);

  return hasConsent;
}
