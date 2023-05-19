/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#457b9d",
        secondary: "#a8dadc",
        light: "#f1faee",
        red: "#e63946",
        darkBlue: "#1d3557",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/heroBackground.jpg')",
      },
    },
  },
  plugins: [],
};
