const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
        times: ['Times New Roman'],
        brittany: ['Brittany Signature'],
        serif: ['Poppins'],
        mono: ['SFMono-Regular', 'Menlo'],
        poppin: ['Poppins']
      },
      backgroundImage: () => ({
        gingko: "url('/images/gingko.png')"
      }),
      colors: {
        gold: {
          100: '#2A3B72',
          900: '#2A3B72',
          300: '#2A3B72'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/custom-forms')]
}
