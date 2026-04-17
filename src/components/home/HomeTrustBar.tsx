export function HomeTrustBar() {
  const items = [
    "Agencia habilitada",
    "Operamos en Argentina y España",
    "Planificación personalizada",
  ];

  return (
    <div className="border-b border-border/70 bg-secondary/45">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-3 text-center text-xs font-medium tracking-wide text-foreground/80 sm:text-sm">
        {items.map((item, index) => (
          <span key={item} className="inline-flex items-center gap-2">
            {index > 0 ? <span className="text-foreground/40">·</span> : null}
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
