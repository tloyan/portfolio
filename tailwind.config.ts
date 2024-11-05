import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "var(--font-oswald)",
        grotesk: "var(--font-space-grotesk)"
      },
      colors: {
        primary: "",
        neutral: {
          dark: "#131313",
          gray: "#797979",
          lightgray: "#A9A9A9",
        }
      }
    },
  },
  plugins: [],
};
export default config;
