/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode : "class",
    theme: {
      extend: {
        fontFamily: {
          'myFont': ['"Poppins"'] // Example using "Poppins" font
        },
        colors :{
          'myColor' : "#090A15"
        }
      },
    },
    plugins: [],
  }