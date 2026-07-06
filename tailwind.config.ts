import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0f766e", dark: "#0d5c56", deeper: "#0a4a45" },
        accent: { DEFAULT: "#14b8a6", light: "#5eead4" },
        gold: { DEFAULT: "#f59e0b", light: "#fbbf24" },
        navy: { DEFAULT: "#0f172a", light: "#1e293b" },
        bg: "#FFFFFF",
        text: { DEFAULT: "#0F172A", secondary: "#334155" },
        muted: "#64748B",
        surface: { DEFAULT: "#F8FAFC", alt: "#F1F5F9" },
        border: { DEFAULT: "#E2E8F0", light: "#F1F5F9" },
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "'Outfit'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)",
        lift: "0 20px 50px -12px rgba(15,23,42,0.15)",
        card: "0 1px 2px rgba(15,23,42,0.03), 0 12px 32px -8px rgba(15,23,42,0.1)",
        glow: "0 8px 40px -8px rgba(15,118,110,0.4)",
        "glow-gold": "0 8px 40px -8px rgba(245,158,11,0.3)",
        "glow-accent": "0 8px 40px -8px rgba(20,184,166,0.35)",
        inner: "inset 0 2px 12px rgba(15,23,42,0.06)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 6vw, 4.5rem)",
          { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        h2: [
          "clamp(1.875rem, 3.6vw, 2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        h3: [
          "clamp(1.25rem, 2vw, 1.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" },
        ],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        pulse: "pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
