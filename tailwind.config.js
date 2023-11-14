/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#5ba4a4",
        "neutral-1": "#ffffff",
        "neutral-2": "#effafa",
        "neutral-3": "#eef6f6",
        "neutral-4": "#7b8e8e",
        "neutral-5": "#2c3a3a",
      },
      fontFamily: {
        LeagueSpartan: ["LeagueSpartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
