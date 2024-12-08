/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "1280px",
      lg: "1536x",
      xl: "1920px",
    },
    fontFamily: {
      heading: ["Syne", "sans-serif"],
      body: ["Urbanist", "sans-serif"],
    },
    colors: {
      bg: "#EEEEEE",
      container: "#FFFEFC",
      black: "#201C25",
      purple: "#9069B5",
      green: "#B2F730",
      grey: "#7C7782",
    },
    extend: {},
  },
  plugins: [],
};
