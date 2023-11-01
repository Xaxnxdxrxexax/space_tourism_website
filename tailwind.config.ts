import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: { min: "376px" },
      md: { min: "768px" },
      lg: { min: "1439px" },
    },
    fontSize: {
      xs: ".875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "3.5rem",
      "6xl": "6.25rem",
      "9xl": "9.375rem",
    },
    extend: {
      fontFamily: {
        bellefair: ["var(--font-bellefair)", ...fontFamily.sans],
        barlowCondensed: ["var(--font-barlow-condensed)", ...fontFamily.sans],
        barlow: ["var(--font-barlow)", ...fontFamily.sans],
      },
      colors: {
        "Fm-black": "#0B0D17",
        "Fm-light-blue": "#D0D6F9",
        "Fm-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
