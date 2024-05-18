/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
      //  'grotesk': ['Hanken Grotesk", sans-serif'],
        space_grotesk:['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

