import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0C",
        paper: "#E8E5DD",
        gold: "#C8A75B",
        rust: "#9C2B2B",
        graphite: "#15151A",
        smoke: "#23232A",
        ash: "#6B6B72",
        bone: "#A8A39A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slow-in": "slowIn 1.6s ease-out forwards",
        breathe: "breathe 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slowIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
