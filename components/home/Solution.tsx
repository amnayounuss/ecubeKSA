"use client";

import { motion } from "framer-motion";
import { Check, TrendingDown, Clock, PlugZap, X, AlertTriangle } from "lucide-react";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { fromLeft, fromRight, stagger, item, viewportOnce } from "@/lib/motion";

const problems = [
  "Disconnected spreadsheets and siloed tools",
  "Slow, costly ERP rollouts that never finish",
  "Untrained staff struggling with complex software",
  "No single source of truth for your numbers",
];

const solutions = [
  {
    icon: Clock,
    title: "Rapid implementation",
    body: "Go live in weeks, not months, with our proven delivery playbook.",
  },
  {
    icon: PlugZap,
    title: "Fully integrated apps",
    body: "Sales, inventory, accounting & HR — unified on one platform.",
  },
  {
    icon: TrendingDown,
    title: "Lower running costs",
    body: "Cut monthly tech spend while gaining better visibility.",
  },
];

export default function Solution() {
  return (
    <section className="relative py-28 sm:py-36">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-bg opacity-40" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Problem side */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-600 ring-1 ring-red-100">
              <AlertTriangle size={12} />
              The Problem
            </span>
            <h2 className="mt-6 text-h2 font-bold text-balance">
              Running a business on the wrong tools costs you every day
            </h2>
            <motion.ul
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 space-y-4"
            >
              {problems.map((p) => (
                <motion.li
                  key={p}
                  variants={item}
                  className="flex items-start gap-3 text-muted"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-50 text-red-500 ring-1 ring-red-100/50">
                    <X size={13} />
                  </span>
                  {p}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Solution side */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-3xl border border-border/50 bg-gradient-to-b from-surface to-white p-8 shadow-card"
          >
            <Badge>The ECube Solution</Badge>
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-7 space-y-4"
            >
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-border/40 transition-shadow duration-300 hover:shadow-card cursor-pointer"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/12 to-accent/8 text-primary-dark transition-all duration-300 group-hover:shadow-glow">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <p className="flex items-center gap-2 font-semibold tracking-tight">
                      <Check
                        size={16}
                        className="text-primary"
                      />{" "}
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
