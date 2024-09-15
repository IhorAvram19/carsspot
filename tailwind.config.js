/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {

    extend: {
      colors:{
        'white1': '#F7F7F7',
        'blueButton': '#0147FF',
        'footerBLack': ' #282828',

      },

      spacing: {
        '30': '7.5rem',
        '75': '18.75rem',
        '360': '90rem',
        '19': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}

