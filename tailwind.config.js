/** @type {import('tailwindcss').Config} */
module.exports = {
  from: "src/css/tailwind.css",
  to: "public/css/tailwind.css",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
