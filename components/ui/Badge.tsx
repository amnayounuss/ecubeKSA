import { ReactNode } from "react";

export default function Badge({
  children,
  dot = true,
  className = "",
}: {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark ring-1 ring-primary/15 ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
      {children}
    </span>
  );
}
