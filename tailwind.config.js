/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(35, 40, 95, <alpha-value>)",
      },
    },
  },
  plugins: [],
};
