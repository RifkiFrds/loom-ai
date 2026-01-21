/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loom: {
          /* Core */
          dark: "#0C0C0C",
          light: "#EBEBEB",

          /* Primary accent (text, CTA, highlight) */
          accent: "#B9B8BC",

          /* Editorial warm background */
          warm: {
            1: "#3a2524", // top warm
            2: "#1a1211", // deep warm
          },

          /* Ambient / glow */
          rose: "#6f4a48",
          roseTwo: "#FF8F91",

          /* UI utility */
          border: "rgba(235,235,235,0.12)",
          muted: "rgba(235,235,235,0.6)",
        },
      },

      fontFamily: {
        serif: ['"Bodoni Moda SC"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],

        /**
         * Brand rule:
         * - Body & UI → JetBrains Mono
         * - Headlines → Bodoni Moda SC
         */
        sans: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
