import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/5493472583255"
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
    >
      <span className="inline-flex size-2 rounded-full bg-gold animate-pulse" aria-hidden />
      <WhatsappLogo size={18} weight="fill" aria-hidden />
      WhatsApp
    </a>
  );
}
