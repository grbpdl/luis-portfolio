/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["var(--font-anton)"],
        rubikGlitch: ["var(--font-rubik-glitch)"],
        rubikVinyl: ["var(--font-rubik-vinyl)"],
        chapFont: ["Chap-Regular"],
      },
    },
  },
  plugins: [],
};
