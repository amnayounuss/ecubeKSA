"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DisplayText from "@/components/ui/DisplayText";
import { COMPANY } from "@/lib/data";
import { fadeUp, fromLeft, fromRight, stagger, item, viewportOnce } from "@/lib/motion";

const field =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-muted/55 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-border/80";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSent(true);
  };

  const info = [
    { icon: MapPin, label: "Office", value: COMPANY.address },
    { icon: Phone, label: "Phone", value: COMPANY.phone },
    { icon: Mail, label: "Email", value: COMPANY.email },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40 mesh-hero">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]" />
        <div className="mesh-blob absolute -top-20 left-1/2 h-72 w-[660px] -translate-x-1/2 rounded-full bg-primary/22" />
        <div className="mesh-blob absolute top-8 right-[14%] h-52 w-52 rounded-full bg-gold/18" />
        <Container className="relative py-24 text-center sm:py-28">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Badge>Get in touch</Badge>
          </motion.div>
          <DisplayText
            text="Contact Us"
            highlight={["Us"]}
            className="mt-6 text-mega font-extrabold text-balance"
            delay={0.12}
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mx-auto mt-5 max-w-xl text-lg text-muted"
          >
            Tell us about your project — we usually respond within one business
            day.
          </motion.p>
        </Container>
      </section>

      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <Container className="grid gap-12 lg:grid-cols-5 relative">
          {/* Info */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-navy">Get in touch</h2>
            <p className="mt-4 text-muted font-medium leading-relaxed">
              Our Riyadh team is ready to help you scope, plan and deliver your
              ERP implementation.
            </p>
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 space-y-4"
            >
              {info.map((i) => (
                <motion.div
                  key={i.label}
                  variants={item}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-5 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary-dark">
                    <i.icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-bold tracking-tight text-navy">{i.label}</p>
                    <p className="text-sm text-muted mt-1 font-medium leading-relaxed">{i.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-3xl border border-border/40 bg-white/80 p-8 shadow-card backdrop-blur-md lg:col-span-3 hover:border-primary/10 transition-colors duration-400"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-primary shadow-glow rounded-full" />
                  </motion.div>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-navy">Thank you!</h3>
                  <p className="mt-2.5 text-muted font-medium">
                    Your message has been received. We&apos;ll be in touch
                    shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold tracking-tight text-navy">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input className={field} value={form.name} onChange={set("name")} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold tracking-tight text-navy">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input className={field} type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold tracking-tight text-navy">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <input className={field} value={form.subject} onChange={set("subject")} placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold tracking-tight text-navy">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea className={`${field} min-h-[150px] resize-y`} value={form.message} onChange={set("message")} placeholder="Tell us about your project..." />
                  </div>
                  {error && <p className="text-sm font-medium text-red-500">{error}</p>}
                  <Button onClick={handleSubmit} className="w-full sm:w-auto" size="md">
                    Send Message <Send size={15} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
