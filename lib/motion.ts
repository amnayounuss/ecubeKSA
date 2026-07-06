import type { Variants, Transition } from "framer-motion";

// Premium easing curve used site-wide
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, margin: "-80px" } as const;

const base: Transition = { duration: 0.6, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: base },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: base },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: base },
};

export const fromLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: base },
};

export const fromRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: base },
};

// Container that staggers its children. Usage: variants={stagger()} initial="hidden" whileInView="show"
export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

// Child item for staggered containers
export const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// Reusable hover/tap micro-interactions
export const hoverLift = {
  whileHover: { y: -6 },
  transition: { type: "spring" as const, stiffness: 300, damping: 22 },
};

export const tapScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

// Word-by-word headline reveal. Wrap each word in a motion child using `wordItem`.
export const wordContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const wordItem: Variants = {
  hidden: { opacity: 0, y: "0.7em", rotate: 4 },
  show: {
    opacity: 1,
    y: "0em",
    rotate: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};
