import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        primary_yellow: "#FFD550",
        discord_purple: "#7289da",
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
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
} satisfies Config;
