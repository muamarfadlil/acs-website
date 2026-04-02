import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8ecf5",
          100: "#c4ceea",
          200: "#9baedd",
          300: "#718ed0",
          400: "#4d74c6",
          500: "#2a5abc",
          600: "#1a3a6e",
          700: "#0f2449",
          800: "#091832",
          900: "#040d1a",
        },
        acs: {
          navy: "#0a1f44",
          blue: "#1a3a6e",
          red: "#c41e1e",
          light: "#f0f4fa",
        },
      },
      fontFamily: {
        // PERBAIKAN: nama variable diselaraskan dengan globals.css
        // globals.css mendefinisikan --font-display dan --font-body
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
        slideIn: "slideIn 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
