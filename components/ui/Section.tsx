"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Badge from "./Badge";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${className}`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <Container className={containerClassName}>{children}</Container>
      </motion.div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Badge className={center ? "" : ""}>{eyebrow}</Badge>}
      <h2 className="mt-5 text-h2 font-bold text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
