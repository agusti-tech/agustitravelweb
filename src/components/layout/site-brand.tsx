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
      <span
        className="inline-flex shrink-0 rounded-xl bg-black p-1.5 ring-1 ring-border/40"
        aria-hidden
      >
        <Image
          src="/images/logo-agusti-travel.png"
          alt=""
          width={isHeader ? 160 : 140}
          height={isHeader ? 72 : 64}
          className={
            isHeader
              ? "h-11 w-auto max-w-[9.5rem] object-contain sm:h-12 sm:max-w-[10.5rem]"
              : "h-10 w-auto max-w-[8.5rem] object-contain sm:h-11 sm:max-w-[9.5rem]"
          }
          priority={isHeader}
        />
      </span>
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
