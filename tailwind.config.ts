import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        primary_yellow: "#FFD550",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bulky: ["PolysansBulky", "Poppins", "sans-serif"],
        neutralMono: ["PolysansNeutralMono", "Poppins", "sans-serif"],
        neutral: ["PolysansNeutral", "Poppins", "sans-serif"],
        median: ["PolysansMedian", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    require("preline/plugin"),
  ],
} satisfies Config;
