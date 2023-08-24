/** @type {import('tailwindcss').Config} */
module.exports = {
  from: "css/tailwind.css",
  to: "build/tailwind.css",
  content: ["./index.html", "./src/**/*.js"],
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
