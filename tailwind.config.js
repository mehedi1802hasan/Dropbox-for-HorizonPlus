/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk: ['Space Grotesk', 'sans-serif'],
        'familjen-grotesk': ['Familjen Grotesk', 'sans-serif'],
        abc:['Yanone Kaffeesatz','sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
