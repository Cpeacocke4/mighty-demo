/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "1280px",
      lg: "1536px",
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
      error: "#EE3939",
      warning: "#EFB226",
      success: "#6DC007",
    },
    extend: {},
  },
  plugins: [],
};
