"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Parses "1000+" -> { target: 1000, prefix: "", suffix: "+" }, "2014" -> {2014}
function parse(value: string) {
  const match = value.match(/^(\D*)(\d[\d,]*)(\D*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    target: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  };
}

export default function StatCounter({
  value,
  className = "",
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parse(value), [value]);
  const [display, setDisplay] = useState<number | string>(parsed ? 0 : value);

  useEffect(() => {
    if (!parsed) return;
    if (!inView) return;
    if (reduce) {
      setDisplay(parsed.target);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * parsed.target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, reduce, duration]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {typeof display === "number" ? display.toLocaleString() : display}
      {parsed.suffix}
    </span>
  );
}
