import { testimonials } from "@/data/testimonials";

export function HomeTestimonials() {
  return (
    <section
      aria-labelledby="testimonios-clientes"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20"
    >
      <div className="mb-10 flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
          Testimonios
        </p>
        <h2 id="testimonios-clientes" className="text-3xl font-semibold tracking-tight">
          Historias reales de viajeros Agusti Travel Co.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.author}
            className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
          >
            <p className="text-sm leading-6 text-muted-foreground">
              “{testimonial.quote}”
            </p>
            <p className="mt-5 text-sm font-semibold">{testimonial.author}</p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {testimonial.trip}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
