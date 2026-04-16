import { googleBusinessReviewsUrl } from "@/data/google-reviews";
import { testimonials } from "@/data/testimonials";

export function HomeTestimonials() {
  const googleReviewsHref = googleBusinessReviewsUrl.trim();

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

      {googleReviewsHref ? (
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border/70 bg-muted/30 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Reseñas en Google</p>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              También podés leer opiniones de clientes en nuestra ficha de Google.
            </p>
          </div>
          <a
            href={googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-primary bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Ver reseñas en Google
          </a>
        </div>
      ) : null}
    </section>
  );
}
