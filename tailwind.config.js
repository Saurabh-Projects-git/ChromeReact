/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        c: "0 1px 6px rgb(32 33 36 / 28%)",
        c2: "0 1px 1px rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
