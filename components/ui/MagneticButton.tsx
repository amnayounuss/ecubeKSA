"use client";

import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Button that subtly follows the cursor (magnetic pull). Falls back to static with reduced-motion.
export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-dark px-7 py-3.5 text-sm font-semibold text-white shadow-glow";
  const sheen = (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={`${base} ${className}`}
    >
      {sheen}
      <motion.span
        animate={{ x: pos.x * 0.3, y: pos.y * 0.3 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative inline-flex items-center gap-2"
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return (
    <button type="button" onClick={onClick} className="contents">
      {content}
    </button>
  );
}
