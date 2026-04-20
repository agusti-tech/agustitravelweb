# Agusti Travel Co — Agent Rules

## 0) Critical Next.js Notice

This project uses a newer Next.js version with breaking changes.

Before implementing, consult relevant docs in `node_modules/next/dist/docs/`.

Follow deprecations and current App Router conventions.

## 1) Project Goal

Build a premium marketing website for **Agusti Travel Co.** (travel agency based in Argentina with operations in Barcelona, Spain), focused on conversion and trust.

## 2) Hard Constraints (Non-negotiable)

- **Language:** Spanish only for all user-facing content and labels.
- **No i18n:** do not add locale routing, translation files, or language switchers.
- **Deployment target:** Cloudflare Pages static export.
- **Next config required:**
  - `output: 'export'`
  - `images: { unoptimized: true }`
- **Stack:** Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui.
- Root layout must use `<html lang="es">`.
- No CMS integration.
- No login/auth.
- Sin API en Next.js (export estático); el formulario de contacto usa una **Cloudflare Pages Function** (`functions/api/contact.ts`) con Resend, no rutas API de Next.
- No database.

## 3) Required Routes

- `/` Homepage
- `/sobre-nosotros` About
- `/privacidad` Privacy policy
- `/servicios` Services overview
- `/destinos` Destination listing
- `/destinos/[slug]` Destination detail (must use `generateStaticParams`)
- `/blog` Blog listing
- `/blog/[slug]` Blog detail (must use `generateStaticParams`)
- `/salidas-grupales` Group departures
- `/contacto` Formulario de consulta: el cliente hace `POST` a `/api/contact` (Cloudflare Pages Function + Resend; variables `RESEND_API_KEY`, `RESEND_FROM`, opcional `CONTACT_TO_EMAIL`)

## 4) Homepage Sections (order is required)

1. Trust bar: “Agencia habilitada · Operamos en Argentina y España · Planificación personalizada”
2. Hero: cinematic image, emotional headline, CTA “Comenzá Tu Viaje”, secondary “Explorar Destinos”, visible mobile WhatsApp CTA
3. Signature services: 3 cards (Itinerarios a medida, Salidas grupales, Experiencias exclusivas locales)
4. Featured destinations: image-led editorial cards with hover effects
5. Why travel with us: dedicated advisor, local expertise, concierge support, trust badges
6. Featured departures: las 3 fechas más cercanas (según `departureDate` en `src/data/departures.ts`; no se muestran salidas con menos de 3 días), inquiry CTA
7. Testimonials
8. Instagram / social embeds (optional reels URLs in `src/data/instagram-showcase.ts`)
9. Consultation CTA band: WhatsApp + consultation form CTA
10. Premium footer: legal + social + contact + nav

## 5) Design System

- Editorial luxury travel aesthetic, image-first, high whitespace
- Fonts:
  - Headings: Playfair Display
  - Body: DM Sans
- Color palette:
  - Primary deep blue `#10367D`
  - Secondary blue `#008ecc`
  - Warm neutrals
  - Gold accents
- 8px spacing rhythm
- Rounded `2xl` cards, soft shadows
- Subtle hover transitions/animations
- Mobile-first responsive behavior
- Sticky WhatsApp CTA on mobile (fixed bottom-right)

## 6) Brand Data (canonical)

- Name: Agusti Travel Co.
- Tagline: Viajes a medida
- Based in: Marcos Juárez, Córdoba, Argentina
- Also operates in: Barcelona, España
- WhatsApp: `https://wa.me/5493472583255` (canonical; +54 9 3472 583255)
- Email: [info@agustitravelco.com](mailto:info@agustitravelco.com)
- Website: [www.agustitravelco.com](http://www.agustitravelco.com)
- Logo: `public/images/logo-agusti-travel.png` (export web) y fuente `design/logo-agusti-travel.ai`. Regenerar en Mac sin Illustrator: `mkdir -p public/tmp && qlmanage -t -s 1600 -o public/tmp design/logo-agusti-travel.ai && mv public/tmp/logo-agusti-travel.ai.png public/images/logo-agusti-travel.png && rm -rf public/tmp`.
- Reseñas Google (opcional, enlace estático): `src/data/google-reviews.ts` — sin API ni backend; si la URL está vacía, no se muestran los CTAs.

## 7) Destination Content Model

Create exactly 4 destinations:

- Patagonia (Argentina)
- España (Barcelona, Madrid, Andalucía)
- Italia (Roma, Toscana, Costa Amalfitana)
- Europa clásica (París, Londres, Amsterdam)

Each destination object must include:

- `name`
- `slug`
- `heroImage` (placeholder URL)
- `shortDescription`
- `highlights` (string array)
- `suggestedDuration`
- `startingPrice`

## 7.1) Blog content (Markdown)

- Source files: `content/blog/*.md` (frontmatter + Markdown body).
- Files whose name starts with `_` are ignored (e.g. `_PLANTILLA.md`).
- `src/data/posts.ts` reads these files at **build time** (no CMS).
- Publishing workflow for non-developers: see [`docs/PUBLICAR_CONTENIDO.md`](docs/PUBLICAR_CONTENIDO.md) (Pull Request review before merge).

## 8) SEO Requirements

- Unique metadata per page `title`, `description`)
- Open Graph metadata per page
- Schema markup:
  - `TravelAgency` on homepage
  - `TouristDestination` on destination pages
- Semantic HTML
- Static sitemap generation

## 9) Next.js 16 Implementation Guardrails

- Dynamic route params are async; handle with `await params`.
- Use App Router metadata APIs `metadata` / `generateMetadata`) correctly.
- Avoid deprecated patterns (check current docs in `node_modules/next/dist/docs/`).
- Keep implementation compatible with static export limitations.

## 10) Out of Scope (Do not build)

- i18n/language switcher
- CMS
- API Routes de Next u otro servidor Node en el repo (el contacto usa solo Pages Functions + Resend)
- Auth
- Database

## 11) Build Order

1. Homepage
2. Destination listing
3. Destination detail pages
4. Contact page
5. About + Services + Group departures
6. SEO + sitemap + final mobile polish

## 12) Multi-Agent Collaboration Rules

When running parallel agents:

- Assign non-overlapping file ownership.
- One agent owns foundation files `layout`, global styles, config).
- Do not change another agent’s owned files unless explicitly requested.
- Reuse shared data/components instead of duplicating.
- At handoff, report:
  1. files changed
  2. what was implemented
  3. risks/follow-ups