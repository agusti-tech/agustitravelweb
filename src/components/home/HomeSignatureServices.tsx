const services = [
  {
    title: "Itinerarios a medida",
    description:
      "Creamos viajes personalizados según tu ritmo, intereses y presupuesto.",
  },
  {
    title: "Salidas grupales",
    description:
      "Propuestas acompañadas para viajar en grupo con seguridad y comodidad.",
  },
  {
    title: "Experiencias exclusivas locales",
    description:
      "Acceso a vivencias auténticas con foco en cultura, gastronomía y bienestar.",
  },
];

export function HomeSignatureServices() {
  return (
    <section
      aria-labelledby="servicios-destacados"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20"
    >
      <div className="mb-10 flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
          Servicios de autor
        </p>
        <h2 id="servicios-destacados" className="text-3xl font-semibold tracking-tight">
          Diseñamos cada viaje con mirada estratégica y humana
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
