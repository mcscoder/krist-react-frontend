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
    },
  },
  plugins: [],
};
