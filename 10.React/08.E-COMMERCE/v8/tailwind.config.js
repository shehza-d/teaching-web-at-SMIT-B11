/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
      },
      screens: {
        xs: "320px",
        mm: "375px",
        ml: "425px",
        testing: "3000px",
      },
    },
  },
  plugins: [],
};
