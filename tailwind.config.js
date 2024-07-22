/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Amulya, sans-serif",
        paragraph: "Synonym, sans-serif",
      },
    },
  },
  plugins: [],
};
