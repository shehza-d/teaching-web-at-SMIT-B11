/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "var(--primary)", secondary: "var(--secondary)" },
    },
  },
  plugins: [],
};
