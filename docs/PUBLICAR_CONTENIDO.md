# Cómo publicar en el sitio (blog y contenido)

**Checklist de una página para imprimir:** `[CHECKLIST_PUBLICAR_IMPRESION.md](./CHECKLIST_PUBLICAR_IMPRESION.md)`

**Guía general (home, datos, Instagram, imágenes):** [`GUIA_MANTENIMIENTO_WEB.md`](./GUIA_MANTENIMIENTO_WEB.md)

Este sitio **no usa WordPress ni un panel mágico**: los artículos del blog son archivos de texto en la carpeta `content/blog/`. Eso es bueno: todo queda guardado en el repositorio, con historial y copias de seguridad.

Hay dos maneras de trabajar. La **más segura para el negocio** es la que usa **Pull Request (PR)**: alguien revisa antes de que el cambio salga a producción.

---

## Opción recomendada: publicar con revisión (Pull Request)

### Idea simple

1. Se crea una **rama nueva** (una “copia de trabajo”).
2. Se agrega o edita un archivo `.md` del blog.
3. Se abre un **Pull Request** (pedido para mezclar los cambios).
4. GitHub (u otra herramienta) **compila el sitio** y muestra si algo falló.
5. Una persona **revisa** y aprueba.
6. Al **mezclar** (`merge`) a la rama principal, el sitio se **vuelve a publicar** automáticamente (según cómo esté configurado Cloudflare Pages con Git).

Así tu hermana **no rompe el sitio en silencio**: siempre hay una revisión antes de publicar.

### Pasos en GitHub (navegador web, sin instalar programas)

> Necesitás una cuenta en GitHub y permiso de escritura en el repositorio del proyecto.

1. Entrá al repositorio del sitio en GitHub.
2. Asegurate de estar en la rama principal (suele llamarse `main`).
3. Creá una rama nueva:
  - Botón que dice **“main”** o el nombre de la rama → escribí un nombre corto, por ejemplo `blog/nuevo-articulo-abril` → **Create branch**.
4. Andá a la carpeta `content/blog/` (en el árbol de archivos del repo).
5. **Add file** → **Create new file** (o **Upload files** si ya tenés el `.md` hecho).
6. Nombre del archivo: algo como `mi-titulo-en-minusculas.md` (sin espacios; podés usar guiones).
7. Copiá el contenido de la plantilla `content/blog/_PLANTILLA.md` y completá:
  - `slug`: identificador único (sin espacios).
  - `title`, `excerpt`, `date`, `author`, `coverImage`, `tags`.
  - Debajo del `---`, escribí el texto del artículo en Markdown.
8. Guardá (**Commit changes**). GitHub puede pedirte un mensaje corto, por ejemplo: `Agrega artículo sobre …`.
9. Abrí un **Pull Request** desde tu rama hacia `main`.
10. Esperá a que aparezca un **check verde** (CI) si está configurado.
11. Pedile a quien revise el contenido (ortografía, tono, datos) que apruebe y haga **Merge**.

Después del merge, Cloudflare Pages (si está conectado al repo) suele **desplegar solo** en unos minutos.

### Qué revisar antes de aprobar

- Título y fecha correctos.
- El `slug` no se repite con otro artículo.
- La imagen de portada (`coverImage`) es una URL que abre bien.
- Ortografía y datos de contacto / precios si aplica.

---

## Opción con automatización (n8n) — también con revisión

Si querés que un formulario o un correo dispare la publicación:

1. n8n recibe el texto (webhook, email, etc.).
2. n8n usa la **API de GitHub** para crear una **rama**, **subir el `.md`** y abrir un **Pull Request** (no merge automático a `main`).
3. La misma persona humana revisa y hace merge.

**Importante:** evitá que n8n haga merge directo a `main` sin revisión, salvo que lo acuerden explícitamente.

---

## Destinos y otras secciones

- **Destinos:** hoy están en código en `src/data/destinations.ts`. Cambiar destinos implica editar ese archivo y pasar por el mismo flujo Git + PR + deploy.
- Si más adelante querés destinos también en Markdown, se puede plantear de la misma forma que el blog.

---

## Ayuda rápida para quien no sabe de computación

1. Pedí que te pasen el texto del artículo por **WhatsApp o Word**.
2. Alguien con acceso al repo lo **copia** en un archivo `.md` en `content/blog/` siguiendo la plantilla.
3. Se abre un **Pull Request** y listo.

No hace falta saber programar: hace falta seguir la plantilla y pedir ayuda para el primer Pull Request.

---

## Dudas frecuentes

**¿Puedo pegar imágenes dentro del artículo?**  
Hoy el cuerpo se muestra con formato simple. Lo habitual es subir la imagen a un hosting (o a `public/` vía PR) y enlazarla en Markdown: `![descripción](url)`.

**¿Cuánto tarda en verse en la web?**  
Después del merge, suele ser **1 a 5 minutos**, según Cloudflare Pages.

**¿Y si algo sale mal?**  
Al estar todo en Git, se puede **volver atrás** a una versión anterior (otra persona con experiencia puede hacerlo en minutos).