"use client";

export function CookieButton() {
  return (
    <button
      type="button"
      className="underline underline-offset-2 transition-colors hover:text-primary"
      onClick={() => {
        (window as { klaro?: { show: () => void } }).klaro?.show();
      }}
    >
      Configurar cookies
    </button>
  );
}
