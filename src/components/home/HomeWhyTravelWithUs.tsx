const benefits = [
  {
    title: "Asesor dedicado",
    description:
      "Un especialista te acompaña antes, durante y después de cada etapa del viaje.",
  },
  {
    title: "Expertise local",
    description:
      "Conocemos en profundidad Argentina y España para recomendar lo mejor de cada lugar.",
  },
  {
    title: "Soporte concierge",
    description:
      "Resolución ágil ante cambios de itinerario, asistencia y ajustes de último minuto.",
  },
  {
    title: "Confianza y respaldo",
    description:
      "Operación formal, atención personalizada y aliados seleccionados en destino.",
  },
];

export function HomeWhyTravelWithUs() {
  return (
    <section
      aria-labelledby="por-que-viajar"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20"
    >
      <div className="mb-10 flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
          Por qué viajar con nosotros
        </p>
        <h2 id="por-que-viajar" className="text-3xl font-semibold tracking-tight">
          Cuidamos cada detalle para que vivas un viaje sin fricciones
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
