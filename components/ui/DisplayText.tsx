"use client";

import { motion } from "framer-motion";
import { wordContainer, wordItem } from "@/lib/motion";

// Animated word-by-word headline. Pass plain text; wrap words to highlight via `highlight`.
export default function DisplayText({
  text,
  highlight = [],
  className = "",
  as: Tag = "h1",
  stagger = 0.08,
  delay = 0,
}: {
  text: string;
  highlight?: string[];
  className?: string;
  as?: "h1" | "h2";
  stagger?: number;
  delay?: number;
}) {
  const words = text.split(" ");
  const MotionTag = Tag === "h1" ? motion.h1 : motion.h2;
  return (
    <MotionTag
      variants={wordContainer(stagger, delay)}
      initial="hidden"
      animate="show"
      className={className}
    >
      {words.map((w, i) => {
        const isHi = highlight.includes(w.replace(/[^\w']/g, ""));
        return (
          <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              variants={wordItem}
              className={`inline-block ${isHi ? "gradient-text" : ""}`}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}
