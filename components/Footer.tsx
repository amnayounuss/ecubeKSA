"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { COMPANY, NAV, SOCIALS, LOGO } from "@/lib/data";
import Container from "./ui/Container";

const iconMap = { Linkedin, Facebook, Instagram, Youtube } as const;

const SERVICES = [
  { label: "Sales", href: "/#services-sales" },
  { label: "POS", href: "/#services-pos" },
  { label: "Finance", href: "/#services-finance" },
  { label: "Operations", href: "/#services-operations" },
  { label: "People", href: "/#services-people" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#FFCC3F]/20 bg-[#0E6E66] relative overflow-hidden text-white">
      {/* Dynamic Background Glows */}
      <div className="absolute -bottom-36 -right-36 h-[500px] w-[500px] rounded-full bg-[#FFCC3F]/15 blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#FFCC3F]/10 blur-2xl pointer-events-none" />
      <div className="absolute inset-0 dot-bg opacity-15 pointer-events-none" />

      <Container className="relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Presentation */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link 
              href="/" 
              className="inline-flex items-center bg-white/95 rounded-2xl p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={LOGO}
                alt="Enterprise Cube"
                width={190}
                height={58}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-teal-50/80 font-medium">
              {COMPANY.intro}
            </p>
            
            {/* Dynamic Social Icons */}
            <div className="mt-8 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white border border-white/5 transition-all duration-300 hover:bg-[#FFCC3F] hover:text-[#0E6E66] hover:shadow-lift"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white border-b border-white/10 pb-3">
              Company
            </h4>
            <ul className="mt-6 space-y-3.5 text-sm font-medium">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link 
                    href={n.href} 
                    className="group flex items-center gap-1.5 text-teal-100/90 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-white" />
                    <span>{n.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white border-b border-white/10 pb-3">
              Services
            </h4>
            <ul className="mt-6 space-y-3.5 text-sm font-medium">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <a 
                    href={s.href} 
                    className="group flex items-center gap-1.5 text-teal-100/90 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-white" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white border-b border-white/10 pb-3">
              Get In Touch
            </h4>
            <ul className="mt-6 space-y-4 text-sm font-medium text-teal-100/90">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 shrink-0 text-white border border-white/5">
                  <MapPin size={15} />
                </span>
                <span className="pt-0.5">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 shrink-0 text-white border border-white/5">
                  <Phone size={15} />
                </span>
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors duration-200">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 shrink-0 text-white border border-white/5">
                  <Mail size={15} />
                </span>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors duration-200">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10 bg-black/5">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs font-semibold text-teal-100/60 sm:flex-row">
          <p>© {COMPANY.legal} All rights reserved.</p>
          {/* <a 
            href={`https://${COMPANY.domain}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {COMPANY.domain}
          </a> */}
        </Container>
      </div>
    </footer>
  );
}
