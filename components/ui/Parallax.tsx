"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Scroll-linked vertical parallax. Positive `speed` moves slower (further away).
export default function Parallax({
  children,
  speed = 60,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={{ y: reduce ? 0 : y }} className={className}>
      {children}
    </motion.div>
  );
}
