/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "desaturated-dark-cyan": "#5ba4a4",
        "light-cyan-background": "#effafa",
        "light-cyan-filter": "#eef6f6",
        "dark-cyan": "#7b8e8e",
        "very-dark-cyan": "#2c3a3a",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
