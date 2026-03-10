import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo colors - Blue and Gold combination
        brand: {
          DEFAULT: "#1E40AF", // Deep Blue
          light: "#3B82F6", // Light Blue
        },
        gold: {
          DEFAULT: "#D97706", // Gold/Amber
          light: "#FEF3C7", // Light Gold
          dark: "#92400E", // Dark Gold
        },
        accent: {
          DEFAULT: "#059669", // Accent Green (kept)
          light: "#D1FAE5",
        },
        // Supporting colors
        primary: {
          DEFAULT: "#1E40AF", // Same as brand
          light: "#EFF6FF",
        },
        secondary: {
          DEFAULT: "#D97706", // Same as gold
          light: "#FEF3C7",
        },
        // Neutral colors
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
