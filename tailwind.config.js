/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair:["Cookie", "serif"],
        poppins:[ "Poppins", "serif"]
      }
    },
  },
  plugins: [],
}

