import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#F4F0E8",
        stone: "#D8C8B3",
        concrete: "#A8A6A0",
        rustic: "#4A5638",
        tropical: "#26301F",
        charcoal: "#151515",
        wood: "#C2A074",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.42em",
      },
    },
  },
  plugins: [],
};
export default config;
