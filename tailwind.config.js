/** @type {import('tailwindcss').Config} */
module.exports = {
  from: "src/css/tailwind.css",
  to: "public/css/tailwind.css",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
