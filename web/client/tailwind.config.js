/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
      },
      colors:{
        green:"#128c7e",
        gray:"#273443",
        dark:"#1c1e21"
      }
    },
  },
  plugins: [],
}