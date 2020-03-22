import swiss from '@theme-ui/preset-swiss'
import merge from 'lodash/merge'

const theme = merge(
  swiss,
  {
    useColorSchemeMediaQuery: true,
    fonts: {
      body: '"PT Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      heading: 'Cormorant, Garamond, serif',
    },
    colors: {
      modes: {
        dark: {
          text: '#fff',
          background: '#000',
        }
      }
    },
    styles: {
      a: {
        cursor: 'pointer',
      },
    },
    textStyles: {
      meta: {
        fontSize: 0,
        textTransform: 'uppercase',
      }
    }
  },
)

console.log(theme)

export default theme
