"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import { SectionHeading } from "../ui/Section";
import { TESTIMONIALS } from "@/lib/data";
import { stagger, item, viewportOnce } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface/30 py-28 sm:py-36">
      {/* Ambient depth */}
      <div className="mesh-blob absolute -top-20 right-[8%] h-80 w-80 rounded-full bg-primary/8" />
      <div className="mesh-blob absolute bottom-0 left-[4%] h-72 w-72 rounded-full bg-gold/10" />
      
      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What customers are saying"
          subtitle="Real results from businesses who trusted Enterprise Cube with their ERP journey."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex flex-col rounded-3xl border border-border/40 bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/10"
            >
              <div className="flex justify-between items-center">
                <Quote className="h-9 w-9 text-primary/15 transition-colors duration-300 group-hover:text-primary/25" />
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={12} className="fill-gold" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-6 flex-1 text-[14px] leading-relaxed text-text/80 font-medium">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3.5 border-t border-border/50 pt-6">
                <div>
                  <p className="text-sm font-bold tracking-tight">{t.name}</p>
                  <p className="text-xs font-medium text-muted">{t.role}</p>
                </div>
                {/* Larger raw client logo on the right side (no circle shape) */}
                {t.logo && (
                  <div className="ml-auto flex items-center transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={t.logo}
                      alt={t.role}
                      width={160}
                      height={64}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
