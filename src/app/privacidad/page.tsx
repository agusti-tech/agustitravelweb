import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.agustitravelco.com";

export const metadata: Metadata = {
  title: "Política de privacidad | Agusti Travel Co.",
  description:
    "Información sobre el tratamiento de datos personales y cookies en el sitio de Agusti Travel Co.",
  alternates: { canonical: `${siteUrl}/privacidad` },
  openGraph: {
    title: "Política de privacidad | Agusti Travel Co.",
    description:
      "Cómo tratamos tus datos y cómo podés ejercer tus derechos.",
    url: `${siteUrl}/privacidad`,
    siteName: "Agusti Travel Co.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de privacidad | Agusti Travel Co.",
    description: "Cómo tratamos tus datos y cómo podés ejercer tus derechos.",
  },
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Conócenos
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Política de privacidad
        </h1>
        <p className="text-sm text-muted-foreground">
          Última actualización: abril de 2026. Este texto es orientativo; conviene
          revisarlo con un asesor legal según tu jurisdicción y operación.
        </p>
      </header>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-heading prose-headings:text-foreground prose-h2:text-xl prose-p:text-foreground/80 prose-a:text-primary prose-strong:text-foreground">
        <h2>1. Responsable</h2>
        <p>
          Agusti Travel Co., con domicilio en Marcos Juárez, provincia de Córdoba,
          Argentina, y operación también en Barcelona, España. Contacto:{" "}
          <a
            href="mailto:info@agustitravelco.com"
            className="text-primary underline underline-offset-2"
          >
            info@agustitravelco.com
          </a>
          .
        </p>

        <h2>2. Datos que podemos tratar</h2>
        <p>
          Según el canal que utilices (formulario de contacto, email, WhatsApp u
          otros), podemos tratar identificación de contacto (nombre, email,
          teléfono), contenido del mensaje y datos necesarios para cotizar o
          organizar un viaje.
        </p>

        <h2>3. Finalidades</h2>
        <p>
          Responder consultas, elaborar propuestas de viaje, prestar el servicio
          contratado y, en su caso, cumplir obligaciones legales aplicables.
        </p>

        <h2>4. Base legal</h2>
        <p>
          Interés legítimo en atender tu consulta, ejecución de medidas
          precontractuales o contractuales según corresponda, y consentimiento
          cuando sea requerido (por ejemplo, cookies no esenciales).
        </p>

        <h2>5. Conservación</h2>
        <p>
          Conservamos los datos el tiempo necesario para las finalidades
          indicadas y según plazos legales o contractuales aplicables.
        </p>

        <h2>6. Derechos</h2>
        <p>
          Podés solicitar acceso, rectificación, supresión, limitación u oposición
          según la normativa aplicable. Para ejercerlos, escribinos a{" "}
          <a
            href="mailto:info@agustitravelco.com"
            className="text-primary underline underline-offset-2"
          >
            info@agustitravelco.com
          </a>
          .
        </p>

        <h2>7. Cookies</h2>
        <p>
          Utilizamos cookies técnicas necesarias para el funcionamiento del sitio
          y, con tu consentimiento, cookies opcionales (por ejemplo, analítica).
          Podés gestionar tus preferencias en cualquier momento desde el banner de
          cookies o el enlace &quot;Configurar cookies&quot; en el pie de página.
        </p>

        <h2>8. Cambios</h2>
        <p>
          Podemos actualizar esta política; la versión vigente estará publicada en
          esta página.
        </p>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        <Link href="/sobre-nosotros" className="text-primary underline underline-offset-2">
          Volver a Sobre nosotros
        </Link>
        {" · "}
        <Link href="/contacto" className="text-primary underline underline-offset-2">
          Contacto
        </Link>
      </p>
    </div>
  );
}
