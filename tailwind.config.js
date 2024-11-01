/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'heading': 'hsla(0, 0%, 100%, 0.6)',
        'veryDarkBlue': 'hsl(233, 47%, 7%)',
        'darkSaturatedBlue': 'hsl(244, 38%, 16%)',
        'softViolet': 'hsl(277, 64%, 61%)'
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Lexend': ['Lexend Deca', 'sans-serif']
      },
      backgroundImage: {
        'desktop': "url('/image-header-desktop.jpg')",
        'mobile': "url('/image-header-mobile.jpg')"
      }
    },
  },
  plugins: [],
}

