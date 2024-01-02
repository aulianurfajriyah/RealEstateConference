/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FCF9F3",
        pink: "#FDE7FE",
        blue: "#EAF6FB",
        orange: "#FCF4E9",
        green: "#EEF6F4",
        pink_bold: "#F9BFFC",
        blue_bold: "#CCEAF5",
        orange_bold: "#F2D3AA",
        green_bold: "#B5D7CD",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        roxborough: ["Roxborough"],
        roxboroughmd: ["Roxborough-Medium"],
        biz: ["BIZ UDPGothic", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },

    screens: {
      xs: "450px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
