/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#6e96cf',
        primary_dark:'#6e96ce',
      },
    },
    fontFamily:{
      sans:['Roboto','sans-serif'],
    },
  },
  plugins: [],
}