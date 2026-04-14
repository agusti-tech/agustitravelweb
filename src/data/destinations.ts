export type Destination = {
  name: string
  slug: string
  heroImage: string
  shortDescription: string
  highlights: string[]
  suggestedDuration: string
  startingPrice: string
}

export const destinations: Destination[] = [
  {
    name: "Patagonia",
    slug: "patagonia",
    heroImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    shortDescription:
      "Paisajes imponentes entre glaciares, montañas y lagos para una experiencia de naturaleza premium en el sur argentino.",
    highlights: [
      "Glaciar Perito Moreno y navegación por el Lago Argentino",
      "Trekking panorámico en El Chaltén",
      "Estadías boutique con vistas a la cordillera",
    ],
    suggestedDuration: "9 días",
    startingPrice: "USD 2.450",
  },
  {
    name: "España",
    slug: "espana",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    shortDescription:
      "Un recorrido entre Barcelona, Madrid y Andalucía combinando cultura, gastronomía y experiencias exclusivas.",
    highlights: [
      "Arquitectura icónica en Barcelona y visita privada",
      "Arte y cocina de autor en Madrid",
      "Ruta andaluza entre Sevilla, Córdoba y Granada",
    ],
    suggestedDuration: "10 días",
    startingPrice: "EUR 2.890",
  },
  {
    name: "Italia",
    slug: "italia",
    heroImage: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
    shortDescription:
      "Roma, Toscana y Costa Amalfitana en un itinerario sofisticado que combina historia, paisajes y dolce vita.",
    highlights: [
      "Visitas curadas por Roma histórica",
      "Experiencias en bodegas y villas de Toscana",
      "Costa Amalfitana con traslados y hoteles seleccionados",
    ],
    suggestedDuration: "11 días",
    startingPrice: "EUR 3.250",
  },
  {
    name: "Europa clásica",
    slug: "europa-clasica",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    shortDescription:
      "París, Londres y Ámsterdam en un circuito elegante para quienes buscan una primera gran experiencia europea.",
    highlights: [
      "City tours premium con tiempo libre curado",
      "Conexiones cómodas entre capitales",
      "Alojamiento céntrico y acompañamiento integral",
    ],
    suggestedDuration: "12 días",
    startingPrice: "EUR 3.100",
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug)
}
