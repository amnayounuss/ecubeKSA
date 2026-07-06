"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users2,
  Heart,
  Eye,
  Lightbulb,
  Sparkles,
  Gauge,
  Users,
  Quote
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section, { SectionHeading } from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import StatCounter from "@/components/ui/StatCounter";
import DisplayText from "@/components/ui/DisplayText";
import CTA from "@/components/home/CTA";
import { STATS, VALUES, LEADERSHIP } from "@/lib/data";
import { fadeUp, stagger, item, viewportOnce } from "@/lib/motion";

const valueIcons = {
  ShieldCheck,
  Users2,
  Heart,
  Eye,
  Lightbulb,
  Sparkles
} as const;

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 mesh-hero">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]" />
        <div className="mesh-blob absolute -top-28 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-primary/20" />
        <div className="mesh-blob absolute top-10 right-[12%] h-72 w-72 rounded-full bg-gold/18" />
        <div className="mesh-blob absolute top-24 left-[6%] h-64 w-64 rounded-full bg-accent/16" />
        
        <Container className="relative py-28 text-center sm:py-36">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Badge>About ECube</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mx-auto mt-6 max-w-4xl text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black leading-[1.1]"
          >
            We&apos;re Building Modern <br />
            <span className="text-[#0E6E66]">ERP Systems</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            As an innovative ERP company, we strive to provide cutting-edge
            solutions that streamline business operations and boost
            productivity. Our focus on leveraging the latest technology ensures
            that our clients stay ahead of the competition and achieve their
            business goals.
          </motion.p>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-border/40 py-20 relative bg-surface/30">
        <Container>
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center group">
                <div className="inline-block p-1 rounded-2xl transition-all duration-300 group-hover:scale-105">
                  <StatCounter
                    value={s.value}
                    className="block bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl tracking-tight"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-muted/90 uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Revamped Results oriented + Great people split section */}
      <Section className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary-dark">Core Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy mt-4 leading-tight text-balance">
              Driven by impact, powered by dedication.
            </h2>
            <p className="mt-5 text-sm text-muted leading-relaxed font-medium">
              We align every implementation project with clear business outcomes, ensuring that Odoo scales effortlessly as your operations grow.
            </p>
          </motion.div>

          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 grid gap-6 sm:grid-cols-2"
          >
            {[
              {
                t: "Results oriented",
                b: "Our approach is results-oriented. We don't just deliver software — we prioritize delivering tangible results that move your business forward and create lasting value.",
                icon: Gauge,
                color: "from-primary/15 to-primary/5",
              },
              {
                t: "What's our secret? Great people.",
                b: "Enterprise Cube boasts a highly skilled and dedicated team, committed to delivering the highest level of quality and satisfaction to every client we serve.",
                icon: Users,
                color: "from-accent/15 to-accent/5",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.t}
                  variants={item}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="rounded-3xl border border-border/40 bg-white p-7 shadow-card hover:shadow-lift transition-all duration-300"
                >
                  <span className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-primary-dark mb-5`}>
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-navy">{c.t}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted font-medium">{c.b}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <section className="bg-surface/50 py-24 sm:py-32 relative">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Our Values"
            title="What we stand for"
            subtitle="The principles that guide how we build, partner, and grow."
          />
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {VALUES.map((v) => {
              const Icon = valueIcons[v.icon as keyof typeof valueIcons];
              return (
                <motion.div
                  key={v.title}
                  variants={item}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="gradient-border group p-px"
                >
                  <div className="h-full rounded-3xl bg-white p-7 shadow-card transition-shadow group-hover:shadow-lift">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/12 to-accent/8 text-primary-dark group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {Icon && <Icon size={18} />}
                      </span>
                      <h4 className="text-[16px] font-bold text-primary-dark tracking-tight">
                        {v.title}
                      </h4>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-muted font-medium">
                      {v.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Leadership */}
      <Section className="py-24 sm:py-32 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-teal-50/30 blur-[100px] pointer-events-none -z-10" />

        <div className="grid gap-12 lg:grid-cols-12 items-start max-w-6xl mx-auto px-4">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-dark">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy mt-4 leading-tight">
              Meet the people leading ECube
            </h2>
            <p className="mt-5 text-sm text-slate-500 leading-relaxed font-medium">
              Our directors bring decades of combined experience in financial operations, enterprise sales, and custom system engineering to ensure smooth, successful ERP implementations across Saudi Arabia.
            </p>
            {/* Minimal support callout */}
            <div className="mt-8 border-t border-slate-200/60 pt-6 flex items-center gap-4">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Active Executive Consulting</p>
            </div>
          </div>

          {/* Right Column: Leadership Cards */}
          <motion.div
            variants={stagger(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {LEADERSHIP.map((l) => (
              <motion.div
                key={l.name}
                variants={item}
                whileHover={{ x: 6 }}
                className="group relative flex flex-col sm:flex-row gap-6 rounded-3xl border-l-4 border-primary border border-slate-200/50 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-slate-200"
              >
                {/* Profile Headshot with double ring */}
                {l.image ? (
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl ring-4 ring-slate-50 border border-slate-200 shrink-0 mx-auto sm:mx-0 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={l.image}
                      alt={l.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span className="grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-xl font-bold text-primary-dark ring-4 ring-slate-50 border border-slate-200 shrink-0 mx-auto sm:mx-0">
                    {l.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                )}

                {/* Profile Details */}
                <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                  <div>
                    <h3 className="text-base font-extrabold text-navy tracking-tight">{l.name}</h3>
                    <p className="text-[11px] font-bold text-primary uppercase tracking-widest mt-0.5">{l.role}</p>
                  </div>
                  <blockquote className="mt-4 text-xs italic leading-relaxed text-slate-500 font-medium border-t border-slate-100 pt-3 relative">
                    <Quote className="absolute -top-1 right-0 h-8 w-8 text-slate-100/40 rotate-180 pointer-events-none" />
                    “{l.quote}”
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <CTA
        title="Ready to take your startup to the next level?"
        subtitle="Partner with a team that treats your growth as its own."
        label="Get Started"
      />
    </>
  );
}
