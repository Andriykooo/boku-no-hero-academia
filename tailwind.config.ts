import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#1E1E1E',
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translate(-25%, 25%)", opacity: "0" },
          "100%": { transform: "translateY(-25%, 0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.6s ease",
        scaleUp: "scaleUp 0.5s ease",
      },
    },
  },
  plugins: [],
};
export default config;
