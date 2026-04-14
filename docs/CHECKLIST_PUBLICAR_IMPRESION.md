# Checklist — Publicar un artículo en el blog

**Imprimí esta página y tachá cada paso.** Guía larga: [`PUBLICAR_CONTENIDO.md`](./PUBLICAR_CONTENIDO.md)

---

## Antes de empezar

- [ ] Tengo cuenta en **GitHub** y permiso para editar el repositorio del sitio.
- [ ] Tengo el texto del artículo listo (Word, WhatsApp o borrador).
- [ ] Tengo la **URL de la imagen de portada** (o la subo después con ayuda).

---

## Publicar con revisión (recomendado)

1. [ ] Entré al repo en GitHub y estoy en la rama **`main`**.
2. [ ] Creé una **rama nueva** (nombre corto, ej. `blog/mi-articulo-abril`).
3. [ ] Fui a la carpeta **`content/blog/`**.
4. [ ] **Add file** → **Create new file** (o subí un `.md`).
5. [ ] Nombre del archivo: **sin espacios**, solo minúsculas y guiones (ej. `mi-articulo.md`).
6. [ ] Copié la plantilla **`content/blog/_PLANTILLA.md`** y completé arriba del todo:
   - [ ] `slug` (único, sin espacios)
   - [ ] `title`
   - [ ] `excerpt`
   - [ ] `date` (formato `AAAA-MM-DD`)
   - [ ] `author`
   - [ ] `coverImage` (URL completa)
   - [ ] `tags` (lista con guiones)
7. [ ] Debajo de la segunda línea `---`, escribí el **cuerpo** del artículo.
8. [ ] Guardé: **Commit changes** (mensaje claro, ej. “Agrega artículo sobre …”).
9. [ ] Abrí un **Pull Request** hacia **`main`**.
10. [ ] Esperé el **check verde** (CI) en el PR.
11. [ ] Pedí a alguien que **revise** (ortografía, datos, tono).
12. [ ] Después de aprobar, hicieron **Merge** a `main`.

---

## Quien revisa el PR (antes de aprobar)

- [ ] Título y fecha correctos.
- [ ] El `slug` **no** está repetido en otro artículo.
- [ ] La imagen de `coverImage` se abre bien en el navegador.
- [ ] Ortografía y datos sensibles (precios, teléfonos) OK.

---

## Si no querés usar GitHub vos

- [ ] Mandá el texto y la foto por **WhatsApp** a quien tenga acceso al repo.
- [ ] Esa persona sube el `.md` y abre el **Pull Request** por vos.

---

## Después del merge

- [ ] En **1 a 5 minutos** el artículo debería verse en la web (según Cloudflare Pages).

---

## Recordatorio rápido (n8n o automatización)

- [ ] Lo automático debe abrir un **PR**, no hacer merge solo a `main`, salvo acuerdo explícito.

---

_Agusti Travel Co. — contenido en `content/blog/` · plantilla `_PLANTILLA.md`_
