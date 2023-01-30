/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", 
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        ...defaultTheme.screens
      },
      colors: {
        'dango-sky': '#43D4BF',
        ...defaultTheme.colors
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
