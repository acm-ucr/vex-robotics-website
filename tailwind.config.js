/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vex: {
          "purple-100": "#B4A5EE",
          "purple-200": "#8870E3",
          "purple-300": "#826BE4",
          "purple-400": "#5543A2",
          grey: "#BBBBBB",
          black: "#0C0922",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
