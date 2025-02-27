import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: {
        Space_Grotesk: ["Space Grotesk", 'serif'],
        Plus_Jakarta_Sans: ["Plus Jakarta Sans", 'serif'],
      },
    },
  },
  plugins: [],
};
