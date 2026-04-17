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

    const checkConsent = () => {
      const consent = w.klaro?.getManager?.()?.getConsent(serviceName) ?? false;
      setHasConsent(consent);
    };

    // Poll briefly after mount to let Klaro initialize
    const pollId = setInterval(() => {
      if (w.klaro?.getManager) {
        checkConsent();

        // Watch for future consent changes
        w.klaro.getManager?.()?.watch({
          update: (_manager, eventType) => {
            if (eventType === "consents") checkConsent();
          },
        });

        clearInterval(pollId);
      }
    }, 100);

    const timeoutId = setTimeout(() => clearInterval(pollId), 8000);

    return () => {
      clearInterval(pollId);
      clearTimeout(timeoutId);
    };
  }, [serviceName]);

  return hasConsent;
}
