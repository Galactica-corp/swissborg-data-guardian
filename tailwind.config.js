/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwindcss-inner-border")],
  theme: {
    backgroundImage: {
      main: "url('/assets/bg-swissborg-data-guardian.png')",
    },
    colors: {
      white: "#ffffff",
      mischka: "#D0D5DD",
      mineShaft: "#2B2B2B",
      fiord: "#475467",
      oxfordBlue: "#344054",
      iron: "#E0E2E5",
      athensGray: "#F2F4F7",
      transparent: "transparent",
      caribbeanGreen: "#0BD6A7",
      mirage: "#191E29",
      red: "#ff5050",
      cornFlowerBlue: "#5865F2",
    },
    extend: {
      boxShadow: {
        xs: "box-shadow: 0px 1px 2px 0px #1018280D",
      },
      opacity: {
        6: "0.06",
      },
    },
    fontFamily: {
      ttCommons: ["TT Commons"],
    },
  },
};
