const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    mainContainer: {
      default: '100%',
      small: '768px',
      large: '960px'
    },
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
          100: '#D6CFC1',
          900: '#AA7A32'
        }
      }
    }
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      const styles = [
        {
          '.main-container': {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: theme('mainContainer.default', '100%')
          }
        },
        {
          '@media (min-width: 768px)': {
            '.main-container': {
              width: theme('mainContainer.small', '100%')
            }
          }
        },
        {
          '@media (min-width: 1450px)': {
            '.main-container': {
              width: theme('mainContainer.large', '100%')
            }
          }
        }
      ]

      addComponents(styles)
    })
  ]
}
