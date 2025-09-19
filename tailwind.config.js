/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-1": "#313031",
        "text-2": "#6a686f",
        ad6eff: "#ad6eff",
        "7a37d2": "#7a37d2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        base18: "18px",
        lg: "20px",
        l: "28px",
        xl: "40px",
      },
    },
  },
  plugins: [],
};
