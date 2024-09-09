/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: "Jost, sans-serif",
      },
      colors: {
        primary: colors.black,
      },
      fontSize: {
        h1: "80px",
        h2: "60px",
        h3: "40px",
        h4: "30px",
        h5: "24px",
        h6: "20px",
        h7: "18px",
      },
    },
  },
  plugins: [],
};
