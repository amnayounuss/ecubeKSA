"use client";

import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { EASE } from "@/lib/motion";

// Symmetrical valley heights (rising on outer edges, lowest in center)
const BARS = [85, 70, 52, 34, 18, 18, 34, 52, 70, 85];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white">
      {/* Soft central ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-teal-100/30 blur-[120px]" />
      </div>

      {/* Masked Grid background texture */}
      <div 
        className="absolute inset-0 grid-bg opacity-[0.75] pointer-events-none" 
        style={{ 
          maskImage: "radial-gradient(circle at 50% 35%, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 35%, black 25%, transparent 75%)"
        }}
      />

      {/* Symmetrical valley columns (wide, sharp rectangles, blue-to-cyan gradient) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80%]">
        <div className="flex h-full w-full items-end gap-0">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 1.2,
                delay: 0.2 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 bg-gradient-to-t from-primary via-accent/70 to-transparent"
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10 flex flex-col items-center pt-24 pb-64 text-center sm:pt-32 sm:pb-88">
        {/* Huge display headline */}
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="font-display mt-4 max-w-5xl text-6xl font-bold leading-[0.92] tracking-tight text-text sm:text-8xl sm:leading-[0.88]"
        >
          ERP Implementation
          <br />
          <span className="font-extrabold bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">Reimagined</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
        >
          We provide all the best features so you can stop focusing on your
          business management and get back to your life&apos;s work.
        </motion.p>

        {/* Clean Services Inline Text List */}
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-widest text-slate-400/90 max-w-3xl"
        >
          <span>Sales & CRM</span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span>POS & Retail</span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span>Inventory & Supply Chain</span>
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span>Accounting & Payroll</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/contact" size="lg" variant="gold">
            Get Started <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button href="#services-sales" size="lg" variant="secondary">
            Learn More
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
