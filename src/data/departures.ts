export type FeaturedDeparture = {
  id: string;
  date: string;
  duration: string;
  destination: string;
  price: string;
};

export type Departure = {
  id: string;
  /** Primera fecha de salida (o la más temprana si hay varias), YYYY-MM-DD, para ordenar y filtrar. */
  departureDate: string;
  title: string;
  destination: string;
  startDate: string;
  duration: string;
  startingPrice: string;
  seats: string;
  itinerary?: string;
  highlights?: string;
};

export const departures: Departure[] = [
  {
    id: "usa-ny-miami-abril-2026",
    departureDate: "2026-04-21",
    title: "Estados Unidos: Nueva York y Miami",
    destination: "Nueva York y Miami (salida desde Buenos Aires)",
    startDate: "21 de abril de 2026 · Buenos Aires",
    duration: "12 días",
    startingPrice: "USD 4.005 + USD 892 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary: "Nueva York (6 noches) y Miami (3 noches).",
  },
  {
    id: "sudafrica-mayo-2026",
    departureDate: "2026-05-16",
    title: "Explora Sudáfrica",
    destination: "Sudáfrica (salida desde Buenos Aires)",
    startDate: "16 de mayo de 2026 · Buenos Aires",
    duration: "15 días",
    startingPrice: "USD 5.227 + USD 1.478 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary:
      "Johannesburgo, Parque Kruger, Pilanesberg, Ciudad del Cabo, Ciudad Jardín (Oudtshoorn y Knysna).",
    highlights: "Incluye 4 safaris.",
  },
  {
    id: "imperios-asia-estambul-oct-2026",
    departureDate: "2026-10-18",
    title: "Encuentro de imperios",
    destination: "Hong Kong, China y Estambul (salida desde Buenos Aires)",
    startDate: "18 de octubre de 2026 · Buenos Aires",
    duration: "24 días",
    startingPrice: "USD 7.618 + USD 1.555 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary:
      "Hong Kong, Pekín, Xi'an, Chengdu, Chongqing, Zhangjiajie, Shanghái y Estambul.",
    highlights:
      "Viajes en tren bala y late check-out garantizado en Shanghái.",
  },
  {
    id: "iconos-europa-2026",
    departureDate: "2026-06-10",
    title: "Iconos de Europa",
    destination: "Madrid, París, Londres y Ámsterdam (salida desde Buenos Aires)",
    startDate:
      "10 de junio, 19 de agosto, 2 de septiembre y 14 de octubre de 2026 · Buenos Aires\n11 de noviembre de 2026 · Buenos Aires",
    duration: "13 días",
    startingPrice:
      "10 jun, 19 ago, 2 sep y 14 oct: USD 3.960 + USD 776 (impuestos)\n11 nov: USD 3.618 + USD 759 (impuestos) · base doble",
    seats: "Consultar cupos por fecha",
  },
  {
    id: "portugal-espana-abril-2026",
    departureDate: "2026-04-13",
    title: "Portugal y España: enclaves de mar, montaña y modernismo",
    destination: "Portugal y España (salida desde Buenos Aires)",
    startDate: "13 de abril de 2026 · Buenos Aires",
    duration: "16 días",
    startingPrice: "USD 4.002 + USD 1.106 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary:
      "Lisboa (2), Fátima (1), Coímbra (1), Oporto (2), Madrid (3) y San Sebastián (4 noches).",
  },
  {
    id: "sendero-europeo-sep-2026",
    departureDate: "2026-09-20",
    title: "Sendero Europeo",
    destination: "Europa (salida desde Buenos Aires)",
    startDate: "20 de septiembre de 2026 · Buenos Aires",
    duration: "21 días",
    startingPrice: "USD 6.553 + USD 1.535 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary:
      "Londres, París, Venecia, Florencia, Roma, Costa Azul, Barcelona y Madrid.",
    highlights:
      "Visitas panorámicas con guía, barco en Venecia y cruce Dover/Calais en ferry.",
  },
  {
    id: "tesoros-adriatico-jun-2026",
    departureDate: "2026-06-09",
    title: "Tesoros del Adriático",
    destination: "Eslovenia, Croacia, Montenegro y Albania (salida desde Buenos Aires)",
    startDate: "9 de junio de 2026 · Buenos Aires",
    duration: "20 días",
    startingPrice: "USD 6.603 + USD 1.187 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary:
      "Liubliana, Zagreb, Split, Dubrovnik, Budva, Tirana y Saranda.",
    highlights: "Alojamiento en playa Saranda.",
  },
  {
    id: "turquia-grecia-mayo-2026",
    departureDate: "2026-05-05",
    title: "Turquía y Grecia: donde oriente y occidente se enamoran",
    destination: "Grecia y Turquía (salida desde Buenos Aires)",
    startDate: "5 de mayo de 2026 · Buenos Aires",
    duration: "23 días",
    startingPrice: "USD 7.097 + USD 1.413 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary:
      "Atenas (2), Mykonos (2), Naxos (2), Santorini (3), Samos (2), Kusadasi/Izmir (2), Pamukkale (1), Capadocia (2) y Estambul (4 noches).",
  },
  {
    id: "turquia-bodrum-jun-2026",
    departureDate: "2026-06-16",
    title: "Turquía esencial y Bodrum",
    destination: "Turquía (salida desde Buenos Aires)",
    startDate: "16 de junio de 2026 · Buenos Aires",
    duration: "15 días",
    startingPrice: "USD 4.991 + USD 1.394 (impuestos) · base doble",
    seats: "Consultar cupos y disponibilidad",
    itinerary:
      "Estambul, Capadocia, Pamukkale, Éfeso, Kusadasi o Izmir y Bodrum.",
    highlights:
      "City tour completo en Estambul y excursión del Bósforo y bazar (ambos con almuerzo).",
  },
];

export const departuresTariffNote =
  "Todas las tarifas son por persona en base doble e incluyen impuestos (tasas aéreas, IVA y gastos de reserva), salvo indicación contraria. No incluyen gastos administrativos. Los valores y fechas están sujetos a cambio sin previo aviso; confirmación al momento de la reserva.";

/** Días mínimos entre hoy (00:00 local) y la fecha de salida para listar el viaje. */
export const MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW = 3;

function startOfLocalDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function parseISODateOnly(iso: string): Date {
  const [y, m, day] = iso.split("-").map(Number);
  return new Date(y, m - 1, day);
}

function addLocalDays(base: Date, days: number): Date {
  const next = new Date(base.getTime());
  next.setDate(next.getDate() + days);
  return next;
}

/**
 * Incluye salidas cuya primera fecha (`departureDate`) sea >= hoy + minDays (00:00 local).
 * Oculta viajes con salida en menos de `minDays` días calendario.
 */
export function getVisibleDepartures(
  now: Date = new Date(),
  minDays: number = MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW,
): Departure[] {
  const today = startOfLocalDay(now);
  const threshold = addLocalDays(today, minDays);
  return departures.filter((d) => parseISODateOnly(d.departureDate) >= threshold);
}

/**
 * Las N salidas visibles más próximas (por `departureDate` ascendente).
 */
export function getFeaturedDepartures(
  now: Date = new Date(),
  limit: number = 3,
  minDays: number = MIN_DAYS_BEFORE_DEPARTURE_TO_SHOW,
): FeaturedDeparture[] {
  const visible = getVisibleDepartures(now, minDays)
    .slice()
    .sort(
      (a, b) =>
        parseISODateOnly(a.departureDate).getTime() -
        parseISODateOnly(b.departureDate).getTime(),
    )
    .slice(0, limit);

  return visible.map((d) => ({
    id: d.id,
    date: d.startDate.split("\n")[0],
    duration: d.duration,
    destination: d.title,
    price: featuredPriceLabel(d),
  }));
}

function featuredPriceLabel(d: Departure): string {
  if (d.id === "iconos-europa-2026") {
    return "desde USD 3.618 + USD 759 (impuestos)";
  }
  return d.startingPrice.split("\n")[0];
}
