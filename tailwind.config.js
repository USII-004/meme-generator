/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}

