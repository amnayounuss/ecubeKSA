"use client";

import { motion } from "framer-motion";
import { Target, Users, MonitorSmartphone, LifeBuoy } from "lucide-react";
import Container from "../ui/Container";
import { SectionHeading } from "../ui/Section";
import Parallax from "../ui/Parallax";
import { FEATURES } from "@/lib/data";
import { stagger, item, viewportOnce } from "@/lib/motion";

const iconMap = { Target, Users, MonitorSmartphone, LifeBuoy } as const;

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-surface/50 py-28 sm:py-36">
      {/* Ambient depth */}
      <Parallax
        speed={80}
        className="pointer-events-none absolute -right-20 top-10"
      >
        <div className="mesh-blob h-80 w-80 rounded-full bg-primary/8" />
      </Parallax>
      <Parallax
        speed={-60}
        className="pointer-events-none absolute -left-24 bottom-0"
      >
        <div className="mesh-blob h-72 w-72 rounded-full bg-gold/10" />
      </Parallax>

      <Container className="relative">
        <SectionHeading
          eyebrow="Powerful, yet simple"
          title="Everything you need, right where you need it"
          subtitle="Everything has been intentionally designed to include the features you want, right where you need them — without being overly complicated."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 space-y-4"
        >
          {FEATURES.map((f, idx) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={f.tag}
                variants={item}
                whileHover={{ scale: 1.01 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                }}
                className="group gradient-border p-px"
              >
                <div className="flex flex-col gap-5 rounded-3xl bg-white p-7 shadow-soft transition-shadow duration-400 group-hover:shadow-lift sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                  {/* Big index number */}
                  <span className="text-stroke shrink-0 text-6xl font-extrabold leading-none opacity-25 transition-all duration-400 group-hover:opacity-100 group-hover:text-[rgb(251,205,61)] group-hover:[color:rgb(251,205,61)] group-hover:[-webkit-text-stroke-color:rgb(251,205,61)] sm:text-7xl">
                    0{idx + 1}
                  </span>

                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/12 to-accent/6 text-primary-dark transition-all duration-400 group-hover:scale-110 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-glow">
                    <Icon size={26} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-dark">
                      {f.tag}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                      {f.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
