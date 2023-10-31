import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1E22",
        primary_yellow: "#FFD550",
        light_yellow: "#FFF1B8",
        primary_gray: "#D1D1D1",
        secondary: "#FFFFFF",
        light_purple: "#D0C3FC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    require("preline/plugin"),
  ],
} satisfies Config;
