"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import DisplayText from "@/components/ui/DisplayText";
import CTA from "@/components/home/CTA";
import { TEAM } from "@/lib/data";
import { fadeUp, stagger, item, viewportOnce } from "@/lib/motion";

export default function Team() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40 mesh-hero">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]" />
        <div className="mesh-blob absolute -top-24 left-1/2 h-80 w-[760px] -translate-x-1/2 rounded-full bg-primary/22" />
        <div className="mesh-blob absolute top-10 left-[12%] h-56 w-56 rounded-full bg-accent/22" />
        <div className="mesh-blob absolute top-16 right-[12%] h-56 w-56 rounded-full bg-gold/22" />
        
        <Container className="relative py-28 text-center sm:py-32">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Badge>Our People</Badge>
          </motion.div>
          <DisplayText
            text="Our Talented Team"
            highlight={["Talented", "Team"]}
            className="mt-6 text-mega font-extrabold text-balance"
            delay={0.12}
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            A team of engineers, consultants and problem-solvers dedicated to
            your ERP success.
          </motion.p>
        </Container>
      </section>

      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <Container className="relative">
          <motion.div
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {TEAM.map((m) => (
              <motion.div
                key={m.name}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group rounded-3xl border border-border/40 bg-white p-6 text-center shadow-soft hover:shadow-lift transition-all duration-300 hover:border-primary/10"
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-2xl font-bold text-primary-dark ring-2 ring-transparent transition-all duration-300 group-hover:scale-105 group-hover:ring-gold/60">
                  {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="mt-4 font-bold text-navy tracking-tight">{m.name}</h3>
                <p className="mt-1 text-sm text-muted font-medium">{m.role}</p>
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mx-auto mt-4 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-surface text-muted opacity-0 ring-1 ring-border transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white"
                >
                  <Linkedin size={15} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTA
        title="Ready to take your startup to the next level?"
        subtitle="Let our team turn your ERP challenges into growth."
        label="Get Started"
      />
    </>
  );
}
