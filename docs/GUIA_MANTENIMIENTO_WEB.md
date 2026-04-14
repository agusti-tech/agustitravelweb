# Guía para mantener el sitio web (Agusti Travel Co.)

Esta guía es para **quien actualiza textos e imágenes** sin ser programador. Si algo no te sale, pedí ayuda a quien tenga acceso al repositorio en GitHub.

También tenés:

- **Checklist corta (imprimir):** [CHECKLIST_PUBLICAR_IMPRESION.md](./CHECKLIST_PUBLICAR_IMPRESION.md)
- **Publicar artículos del blog (con revisión):** [PUBLICAR_CONTENIDO.md](./PUBLICAR_CONTENIDO.md)
- **Prueba de salida en Cloudflare Pages:** [LAUNCH_TEST_CLOUDFLARE_PAGES.md](./LAUNCH_TEST_CLOUDFLARE_PAGES.md)

---

## 1. Cómo funciona el sitio (en simple)

- El sitio es una **página estática**: no hay panel tipo WordPress en internet.
- Los cambios se hacen **editando archivos** en un proyecto guardado en **GitHub**.
- Cuando alguien **guarda los cambios** (con revisión, Pull Request) y se **publica** la nueva versión, **Cloudflare** vuelve a armar el sitio en unos minutos.

No hace falta instalar programas para lo básico: se puede usar **GitHub en el navegador** (como en la guía del blog).

---

## 2. Qué podés tocar vos y qué conviene dejar con ayuda


| Tarea                                                    | Dificultad                     | Dónde está                                                                     |
| -------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------ |
| Escribir **artículos del blog**                          | Media (se aprende una vez)     | Carpeta `content/blog/` — ver [PUBLICAR_CONTENIDO.md](./PUBLICAR_CONTENIDO.md) |
| Cambiar **salidas grupales / destacadas en la home**     | Fácil con ayuda la primera vez | `src/data/departures.ts`                                                       |
| Cambiar **testimonios** en la home                       | Fácil con ayuda                | `src/data/testimonials.ts`                                                     |
| Añadir **reels o posts de Instagram** en la home         | Fácil                          | `src/data/instagram-showcase.ts` (solo enlaces)                                |
| Cambiar textos del **hero** o secciones de la home       | Media                          | Archivos en `src/components/home/` (mejor con ayuda)                           |
| Subir **fotos propias** (no de internet)                 | Fácil                          | Carpeta `public/images/` y luego enlazar la ruta en el código                  |
| Cambiar **destinos** (textos de Patagonia, España, etc.) | Media                          | `src/data/destinations.ts`                                                     |


**Regla de oro:** los cambios importantes van en una **rama nueva** + **Pull Request** + alguien **revisa** antes de mezclar a `main`, igual que con el blog.

---

## 3. Página principal (home): qué es cada cosa

La home está armada por **bloques** (secciones), en este orden:

1. Barra de confianza (texto corto arriba de todo).
2. Hero (foto grande, título principal, botones).
3. Servicios destacados (3 tarjetas).
4. Destinos destacados (3 tarjetas con foto).
5. Por qué viajar con nosotros.
6. Salidas destacadas (fechas y precios orientativos).
7. Testimonios.
8. **Instagram** (enlace al perfil; si cargan enlaces, se ven reels/publicaciones embebidas).
9. Franja azul de consulta (WhatsApp / contacto).
10. Pie de página (navegación, datos, redes).

Los textos largos de cada bloque están en **componentes** dentro de `src/components/home/`. Para cambiar un título o un párrafo, hay que editar ese archivo (o pedir que lo hagan). Las **salidas**, **testimonios** e **Instagram destacado** se pueden centralizar en archivos de la carpeta `src/data/` (más fácil de explicar y mantener).

---

## 4. Imágenes

### Fotos propias (recomendado para marca)

1. Que alguien con acceso suba los archivos a `**public/images/`** (por ejemplo `public/images/home/hero.jpg`).
2. En el código, la ruta que se usa es **sin** “public”: por ejemplo `/images/home/hero.jpg`.

### Fotos desde internet (URL)

- Se puede pegar la dirección `https://...` en el componente o en el archivo de datos correspondiente.

### Tamaño y peso

- Convienen imágenes **livianas** (por ejemplo comprimidas) para que el sitio cargue rápido.

---

## 5. Blog (artículos)

Seguí la guía **[PUBLICAR_CONTENIDO.md](./PUBLICAR_CONTENIDO.md)**. Resumen: archivos **Markdown** en `content/blog/`, con revisión antes de publicar.

---

## 6. Instagram y redes en la home

**Sí se puede** mostrar contenido de Instagram en el sitio, de forma manual y segura:

1. En Instagram, abrí el **reel** o la **publicación** que quieras mostrar.
2. Menú **···** → **Copiar enlace**.
3. Ese enlace se agrega en `**src/data/instagram-showcase.ts`** como una línea `{ url: "…" }` dentro del array.
4. Guardás los cambios con el mismo flujo Git (rama + Pull Request + revisión).

**Importante**

- Instagram **no** da un “muro automático” oficial fácil sin API de negocio; por eso elegimos **enlaces concretos** (reels o posts) que vos elegís.
- Los embeds cargan código de Instagram: si usás banner de cookies (Klaro), en algunos países puede aplicar consentimiento de marketing; es tema legal a revisar con el equipo.

Si el array está **vacío**, la sección igual muestra el botón para ir al perfil **@agustitravelco**.

---

## 7. Formulario de contacto

El formulario **no envía mail solo**: sirve para validar datos en el navegador y mostrar un mensaje. Para recibir mensajes por mail de verdad haría falta un servicio externo (Formspree, etc.) — eso es un cambio técnico aparte.

Mientras tanto, los clientes pueden usar **WhatsApp** y el **email** que figuran en el sitio.

---

## 8. Si “algo se rompe”

- En GitHub, los cambios tienen **historial**: se puede **volver atrás** a una versión que funcionaba.
- El **CI** (si está configurado) prueba que el sitio **compile** antes de aceptar un cambio.

---

## 9. Resumen para tu rutina

1. **Blog:** nuevos textos → archivo `.md` en `content/blog/` → PR → revisión → publicar.
2. **Home (datos):** salidas, testimonios, Instagram → archivos en `src/data/` → PR.
3. **Imágenes propias:** subir a `public/images/` → enlazar rutas `/images/...` → PR.
4. **Dudas grandes:** pedir ayuda antes de tocar cosas fuera de `content/` y `src/data/`.

---

*Documento interno Agusti Travel Co. — actualizar si cambia el flujo de trabajo.*