import Image from "next/image";
import Link from "next/link";

type SiteBrandProps = {
  variant?: "header" | "footer";
};

export function SiteBrand({ variant = "header" }: SiteBrandProps) {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${isHeader ? "" : "items-start"}`}
    >
      <Image
        src="/images/logo-agusti-travel.png"
        alt=""
        width={isHeader ? 120 : 96}
        height={isHeader ? 48 : 40}
        className={
          isHeader
            ? "h-10 w-auto shrink-0 object-contain"
            : "h-8 w-auto shrink-0 object-contain sm:h-9"
        }
        priority={isHeader}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`font-heading text-foreground transition-colors group-hover:text-primary ${
            isHeader ? "text-xl" : "text-lg"
          }`}
        >
          Agusti Travel Co.
        </span>
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Viajes a medida
        </span>
      </span>
    </Link>
  );
}
