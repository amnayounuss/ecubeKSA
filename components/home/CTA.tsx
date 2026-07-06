"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function CTA({
  title = "Level up your productivity",
  subtitle = "Get started today and improve your workflow.",
  label = "Request Demo",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-20 text-center text-white shadow-lift sm:px-16"
        >
          {/* Subtle noise and mesh elements */}
          <div className="absolute inset-0 grid-bg opacity-[0.05]" />
          <div className="absolute inset-0 noise opacity-30" />
          
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="mesh-blob absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30"
          />
          <div className="mesh-blob absolute -bottom-24 -left-12 h-80 w-80 rounded-full bg-accent/40" />
          <div className="mesh-blob absolute -bottom-12 right-1/3 h-56 w-56 rounded-full bg-gold/30" />

          <h2 className="relative text-h2 font-extrabold tracking-tight text-balance text-white">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 font-medium">
            {subtitle}
          </p>
          <div className="relative mt-10 flex justify-center">
            <Button
              href={href}
              variant="secondary"
              size="lg"
              className="!bg-white !text-navy !ring-0 hover:!bg-slate-100 hover:!text-primary-dark transition-all duration-300 shadow-glow"
            >
              {label} <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
