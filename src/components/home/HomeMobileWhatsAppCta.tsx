import { Button } from "@/components/ui/button";

export function HomeMobileWhatsAppCta() {
  return (
    <div className="fixed right-4 bottom-4 z-50 sm:hidden">
      <Button asChild size="lg" className="rounded-2xl shadow-lg">
        <a href="https://wa.me/5493472583255" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
