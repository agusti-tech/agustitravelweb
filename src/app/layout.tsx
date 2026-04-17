import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { KlaroConsent } from "@/components/klaro-consent";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agustitravelco.com"),
  title: {
    default: "Agusti Travel Co. | Viajes a medida",
    template: "%s | Agusti Travel Co.",
  },
  description:
    "Diseñamos viajes a medida con asesoría personalizada en Argentina y España.",
  openGraph: {
    title: "Agusti Travel Co. | Viajes a medida",
    description:
      "Planificación de viajes premium con atención personalizada, salidas grupales y experiencias exclusivas.",
    url: "https://www.agustitravelco.com",
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Agusti Travel Co. — Viajes a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agusti Travel Co. | Viajes a medida",
    description:
      "Planificación de viajes premium con atención personalizada, salidas grupales y experiencias exclusivas.",
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: "/images/logo-agusti-travel.png",
    apple: "/images/logo-agusti-travel.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        dmSans.variable,
        playfairDisplay.variable,
      )}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Ir al contenido principal
        </a>
        <div className="flex min-h-full flex-col">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <WhatsAppCTA />
          <KlaroConsent />
        </div>
      </body>
    </html>
  );
}
