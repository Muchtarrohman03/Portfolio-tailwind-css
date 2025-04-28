/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320",
      },
    },
  },
  plugins: [[require("daisyui")]],
};
