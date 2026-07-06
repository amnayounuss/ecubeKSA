"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-primary to-primary-dark text-white shadow-glow hover:shadow-lift",
  secondary:
    "bg-white/80 text-text backdrop-blur-sm ring-1 ring-border hover:ring-primary/40 hover:text-primary-dark hover:bg-white",
  ghost: "text-text hover:text-primary-dark hover:bg-surface",
  gold:
    "bg-[#fbcd3d] text-zinc-950 shadow-soft hover:bg-[#ebd532] hover:shadow-lift",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 cursor-pointer";
  const cls = `${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const inner = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const sheen =
    variant === "primary" || variant === "gold" ? (
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    ) : null;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {sheen}
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {sheen}
      {inner}
    </button>
  );
}
