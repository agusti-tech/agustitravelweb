/**
 * Reels o publicaciones de Instagram para mostrar en la home.
 *
 * Cómo obtener el enlace:
 * 1. Abrí el reel o la publicación en Instagram (app o web).
 * 2. Tocá los tres puntos ··· → "Enlace" / "Copiar enlace".
 * 3. Pegá la URL acá (debe empezar por https://www.instagram.com/…).
 *
 * Dejá el array vacío [] si todavía no querés mostrar embeds; la sección
 * seguirá mostrando el enlace al perfil @agustitravelco.
 */
export type InstagramShowcaseItem = {
  url: string;
};

export const instagramShowcase: InstagramShowcaseItem[] = [
  { url: "https://www.instagram.com/reel/DW6_91WhRMH/" },
  { url: "https://www.instagram.com/reel/DW2UJu7BOiH/" },
  { url: "https://www.instagram.com/reel/DWZGLEXh8mz/" },
  { url: "https://www.instagram.com/reel/DWU4G3ehTNk/" },
  { url: "https://www.instagram.com/reel/DWCy9K3jjP3/" },
  { url: "https://www.instagram.com/reel/DVt_zAyjhMO/" },
];
