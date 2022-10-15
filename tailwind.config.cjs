/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    colors: {
      transparent: 'transparent',
      
      black: '#000',
      white: '#fff',

      gray: {
        900: '#121214',
        700: '#202024',
        400: '#7C7C8A',
        200: '#c4c4cc',
        100: '#E1E1E6',
      },

      cyan: {
        500: '#61DAFB',
        300: '#81D8F7',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
