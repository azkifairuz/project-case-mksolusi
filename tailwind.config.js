/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#17375E",
        "secondary":"#8B8B8B"
      }
    },
  },
  plugins: [],
}

