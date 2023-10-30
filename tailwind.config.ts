import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1E22",
        primary_yellow: "#FFD550",
        discord_purple: "#7289da",
        light_yellow: "#FFF1B8",
        primary_gray: "#D1D1D1",
        secondary: "#FFFFFF",
        light_purple: "#D0C3FC",
      },
      height: {
        "128": "32rem", // Adds h-128 for 32rem/512px height
        "144": "36rem", // Adds h-144 for 36rem/576px height
        "160": "40rem", // Adds h-160 for 40rem/640px height
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
