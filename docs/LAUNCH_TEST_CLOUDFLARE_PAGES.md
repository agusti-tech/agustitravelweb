# Launch Test en Cloudflare Pages

Esta guía deja el sitio listo para una prueba de salida a producción en Cloudflare Pages.

## 1) Preflight local (antes de subir)

Ejecutar en el proyecto:

```bash
npm install
npm run lint
npm run build
```

Validar que:

- No haya errores de lint.
- `next build` complete y genere `out/`.
- Las rutas estáticas aparezcan en el resumen de build (`/`, `/destinos`, `/blog`, etc.).

## 2) Configuración exacta en Cloudflare Pages

En **Workers & Pages -> Pages -> Create project -> Connect to Git**:

- **Production branch:** `main`
- **Framework preset:** `Next.js` (o `None` si no aparece correctamente)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (raíz del repo)
- **Node.js version:** `20` o superior

No hace falta configurar funciones ni adaptadores porque el sitio usa export estático.

## 3) Primer deploy de prueba (launch test)

1. Hacer push a la rama con los cambios.
2. Abrir el proyecto en Cloudflare Pages y lanzar el primer deploy.
3. Confirmar en logs:
  - instalación de dependencias OK
  - `npm run build` OK
  - artefacto publicado desde `out/`

## 4) Checklist de verificación post-deploy

Probar manualmente:

- Home (`/`)
- Destinos (`/destinos`) y 4 detalles (`/destinos/patagonia`, `/destinos/espana`, `/destinos/italia`, `/destinos/europa-clasica`)
- Blog (`/blog`) y notas publicadas
- Contacto (`/contacto`)
- Enlaces de WhatsApp (`https://wa.me/5493472583255`) en:
  - CTA móvil
  - footer
  - contacto
  - salidas grupales
  - detalle de destinos

También validar:

- `robots.txt` responde
- `sitemap.xml` responde
- No hay 404 en rutas principales

## 5) Si falla el build en Cloudflare

Chequeos rápidos:

1. Verificar que el output directory sea `out`.
2. Verificar que el comando de build sea `npm run build`.
3. Confirmar que el repo tenga `next.config.ts` con:
  - `output: "export"`
  - `images.unoptimized: true`
4. Reintentar deploy limpiando caché de build en Cloudflare.

## 6) Resultado esperado del launch test

El deploy queda estable en Cloudflare Pages, con todas las rutas estáticas accesibles y enlaces críticos (WhatsApp/contacto/SEO básico) funcionando.