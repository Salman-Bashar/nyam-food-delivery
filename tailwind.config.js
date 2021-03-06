/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-red-1": "#FEF1F1",
        "brand-red-2": "#EB3738",
        "brand-dark-1": "#323232",
        "brand-grey-1": "#C4C4C4",
        "brand-grey-2": "#F8F9FA",
      },
      boxShadow: {
        red: "0 0 1px 1px #EB3738",
        grey: "0 1px 3px 0 rgba(60, 64, 67, 0.3)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
