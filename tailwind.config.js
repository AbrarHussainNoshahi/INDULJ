/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
import fluidTypography from "tailwind-fluid-typography";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [flowbitePlugin, fluidTypography],
  theme: {
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
    },
    extend: {
      colors: {
        danger: "#FF4D4D",
        success: "#26AE60",
        dark: "#252525",
        darktext: '#2e2e2e',
        black: "#000000",
        warning: '#FFCF23',
        primary: '#1387C7'
      },
    },
  },
};
