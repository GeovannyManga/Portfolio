import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue:'#0B417D',
        customBlueBlack: '#020C17',
         customBlueVias: '#041C37',
         naranja: '#FF4D5A'
      },
      opacity: {
        '2': '0.02', // 1% de opacidad
        '5': '0.05', // 5% de opacidad
        '7': '0.07', // 7% de opacidad
        '9': '0.09', // 9% de opacidad
      }
    },
  },
  plugins: [],
} satisfies Config;
