"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, LOGO } from "@/lib/data";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        animate={{
          marginTop: scrolled ? 12 : 0,
          borderRadius: scrolled ? 999 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto transition-[max-width,box-shadow,background-color,border-color] duration-400 ${
          scrolled
            ? "max-w-5xl glass shadow-card"
            : "max-w-full border-b border-black/5 bg-white/70 backdrop-blur-md"
        }`}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Container
          className={`flex items-center justify-between transition-all duration-400 ${
            scrolled ? "h-14 px-5 sm:px-6" : "h-16"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            {/* Cropped Cube Icon from the original LOGO */}
            <div 
              className="relative overflow-hidden transition-all duration-400" 
              style={{ 
                width: scrolled ? "24px" : "30px", 
                height: scrolled ? "26px" : "32px" 
              }}
            >
              <img
                src={LOGO}
                alt="Enterprise Cube Icon"
                className="absolute left-0 top-0 max-w-none"
                style={{ height: "100%", width: "auto" }}
              />
            </div>
            {/* Dynamic Text Logo */}
            <span 
              className={`font-sans tracking-tight transition-all duration-400 text-text ${
                scrolled 
                  ? "text-base font-semibold" 
                  : "text-lg font-medium"
              }`}
            >
              Enterprise <span className="font-extrabold">Cube</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium tracking-tight transition-colors cursor-pointer ${
                    active
                      ? "text-primary-dark"
                      : "text-text hover:text-primary-dark"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/8"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" size="sm" variant={scrolled ? "gold" : "primary"}>
              Get Started <ArrowUpRight size={14} />
            </Button>
          </div>

          <button
            className="md:hidden cursor-pointer p-1 transition-colors text-text"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border/50 bg-white/95 backdrop-blur-lg md:hidden"
            >
              <Container className="flex flex-col gap-1 py-4">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button href="/contact" className="mt-3 w-full" variant={scrolled ? "gold" : "primary"}>
                  Get Started
                </Button>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
