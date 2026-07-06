"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import { CLIENTS } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Logos() {
  // Triple the array to ensure smooth continuous marquee flow
  const row = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-border/40 bg-white py-14">
      <Container>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center text-xs font-bold uppercase tracking-widest text-primary-dark"
        >
          Trusted by growing businesses
        </motion.p>

        {/* Continuous sliding marquee with raw, visible logos (no box shape wrappers) */}
        <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-20 group-hover:[animation-play-state:paused] py-4">
            {row.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
                title={c.name}
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={200}
                  height={80}
                  className="max-h-20 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
