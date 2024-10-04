/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwindcss-inner-border")],
  theme: {
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
      whiteSmoke: "#F6F5F4",
      balticSea: "#2B2B2B",
      riverBed: "#475467",
      black: "#000",
      caribbeanGreen: "#01C38C",
    },
    extend: {
      backgroundImage: {
        main: "url('/assets/bg-swissborg-data-guardian.png')",
        cardBg: "url('/assets/card-shape.png')",
      },
      backgroundPosition: {
        cardBg: "right -40% top 90px",
      },
      boxShadow: {
        xs: "box-shadow: 0px 1px 2px 0px #1018280D",
      },
      opacity: {
        2: "0.02",
        3: "0.03",
        4: "0.04",
        6: "0.06",
        7: "0.07",
        8: "0.08",
      },
    },
    fontFamily: {
      ttCommons: ["TT Commons"],
    },
  },
};
