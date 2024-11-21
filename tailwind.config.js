/** @type {import('tailwindcss').Config} */

module.exports = {

  darkMode: "class",

  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      color: {
        blue: '#05089F',
        dark_blue: '#1A1B41',
        cream: '#E6ECE5',
        gray: '#6D6F7E',
        light_blue: '#5EAFF0',
      },

      fontFamily: {
        dm_serif: ['Dm Serif Display', 'serif'],
        poppins: ['Poppins', 'regular'],
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
  
}

