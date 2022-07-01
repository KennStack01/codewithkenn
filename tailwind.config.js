/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "turbo-back-blue": {
          DEFAULT: "#26363F",
          50: "#7296AA",
          100: "#668DA3",
          200: "#54778B",
          300: "#456272",
          400: "#354C58",
          500: "#26363F",
          600: "#11181C",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        "turbo-light-blue": {
          DEFAULT: "#00C2FF",
          50: "#B8EEFF",
          100: "#A3E9FF",
          200: "#7ADFFF",
          300: "#52D6FF",
          400: "#29CCFF",
          500: "#00C2FF",
          600: "#0097C7",
          700: "#006D8F",
          800: "#004257",
          900: "#00171F",
        },
      },
    },
  },
  plugins: [],
};
