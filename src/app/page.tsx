import type { Metadata } from "next";

import { HomeConsultationBand } from "@/components/home/HomeConsultationBand";
import { HomeFeaturedDepartures } from "@/components/home/HomeFeaturedDepartures";
import { HomeFeaturedDestinations } from "@/components/home/HomeFeaturedDestinations";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeInstagramReels } from "@/components/home/HomeInstagramReels";
import { HomeSignatureServices } from "@/components/home/HomeSignatureServices";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeTrustBar } from "@/components/home/HomeTrustBar";
import { HomeWhyTravelWithUs } from "@/components/home/HomeWhyTravelWithUs";

export const metadata: Metadata = {
  title: "Agusti Travel Co. | Viajes a medida desde Argentina y España",
  description:
    "Planificamos viajes a medida con asesoramiento personalizado, salidas grupales y experiencias exclusivas en Argentina y Europa.",
  alternates: { canonical: "https://www.agustitravelco.com" },
  openGraph: {
    title: "Agusti Travel Co. | Viajes a medida",
    description:
      "Descubrí destinos únicos con una agencia habilitada que opera en Argentina y España.",
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
    title: "Agusti Travel Co. | Viajes a medida desde Argentina y España",
    description:
      "Planificamos viajes a medida con asesoramiento personalizado, salidas grupales y experiencias exclusivas en Argentina y Europa.",
    images: ["/images/og-default.jpg"],
  },
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Agusti Travel Co.",
  slogan: "Viajes a medida",
  url: "https://www.agustitravelco.com",
  email: "info@agustitravelco.com",
  areaServed: ["Argentina", "España"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+54 9 3472 583255",
      availableLanguage: "Spanish",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marcos Juárez",
    addressRegion: "Córdoba",
    addressCountry: "AR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <HomeTrustBar />
      <div className="flex flex-col">
        <HomeHero />
        <HomeSignatureServices />
        <HomeFeaturedDestinations />
        <HomeWhyTravelWithUs />
        <HomeFeaturedDepartures />
        <HomeTestimonials />
        <HomeInstagramReels />
        <HomeConsultationBand />
      </div>
    </>
  );
}
