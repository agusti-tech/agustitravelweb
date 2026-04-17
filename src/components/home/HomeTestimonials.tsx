import { Star } from "@phosphor-icons/react/dist/ssr";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { googleBusinessReviewsUrl } from "@/data/google-reviews";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          weight={i < rating ? "fill" : "regular"}
          className={i < rating ? "text-gold" : "text-muted-foreground/40"}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function HomeTestimonials() {
  const googleReviewsHref = googleBusinessReviewsUrl.trim();

  return (
    <section
      aria-labelledby="testimonios-clientes"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-24"
    >
      <RevealOnScroll className="mb-10 flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
          Testimonios
        </p>
        <h2 id="testimonios-clientes" className="text-3xl font-semibold tracking-tight md:text-4xl">
          Historias reales de{" "}
          <span className="font-light italic">viajeros</span> Agusti Travel Co.
        </h2>
      </RevealOnScroll>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <RevealOnScroll key={testimonial.author} delay={(i + 1) as 1 | 2 | 3}>
            <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
              <StarRating />
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-border/50 pt-4">
                <p className="text-sm font-semibold">{testimonial.author}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {testimonial.trip}
                </p>
              </div>
            </article>
          </RevealOnScroll>
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
