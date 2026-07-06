"use client";

// Large kinetic outline-text marquee band (award-style brand statement).
export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`relative overflow-hidden py-10 ${className}`}>
      <div className="flex w-max animate-marquee items-center gap-10 sm:gap-16">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10 sm:gap-16">
            <span className="text-stroke whitespace-nowrap text-5xl font-extrabold uppercase tracking-tight text-transparent sm:text-7xl cursor-pointer">
              {t}
            </span>
            <span className="h-3 w-3 shrink-0 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
