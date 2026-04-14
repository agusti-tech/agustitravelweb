export type FeaturedDeparture = {
  date: string;
  duration: string;
  destination: string;
  price: string;
};

export const featuredDepartures: FeaturedDeparture[] = [
  {
    date: "15 de mayo de 2026",
    duration: "10 días",
    destination: "Patagonia esencial",
    price: "USD 2.450",
  },
  {
    date: "12 de junio de 2026",
    duration: "9 días",
    destination: "España cultural",
    price: "EUR 2.190",
  },
  {
    date: "08 de septiembre de 2026",
    duration: "11 días",
    destination: "Italia clásica",
    price: "EUR 2.680",
  },
];

export type Departure = {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  duration: string;
  startingPrice: string;
  seats: string;
};

export const departures: Departure[] = [
  {
    id: "patagonia-octubre",
    title: "Aventura premium en Patagonia",
    destination: "Patagonia",
    startDate: "12 de octubre de 2026",
    duration: "8 noches / 9 días",
    startingPrice: "USD 2.450",
    seats: "8 lugares disponibles",
  },
  {
    id: "italia-noviembre",
    title: "Italia clásica y costa",
    destination: "Italia",
    startDate: "5 de noviembre de 2026",
    duration: "10 noches / 11 días",
    startingPrice: "EUR 3.250",
    seats: "6 lugares disponibles",
  },
  {
    id: "europa-clasica-marzo",
    title: "Capitales de Europa clásica",
    destination: "Europa clásica",
    startDate: "18 de marzo de 2027",
    duration: "11 noches / 12 días",
    startingPrice: "EUR 3.100",
    seats: "10 lugares disponibles",
  },
];
