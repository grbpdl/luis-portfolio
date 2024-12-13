module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        rubikGlitch: ["var(--font-rubik-glitch)", "sans-serif"],
        rubikVinyl: ["var(--font-rubik-vinyl)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
