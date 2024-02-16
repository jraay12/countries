/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)", //Dark Mode Elements
        VeryDarkBlue: "hsl(207, 26%, 17%)", //Dark Mode Background
        VeryDarkBlue: "hsl(200, 15%, 8%)", //Light Mode Text
        DarkGray: "hsl(0, 0%, 52%)", //Light Mode Input
        VeryLightGray: "hsl(0, 0%, 98%)", //Light Mode Background
        White: "hsl(0, 0%, 100%)", //Dark Mode Text & Light Mode Elements
      },
    },
    screens: {
      mobile: "375px",
      table: "768px",
      desktop: "1024px",
      destkoplg: "1440px",
    },
  },
  plugins: [],
};
