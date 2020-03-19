import swiss from '@theme-ui/preset-swiss'
import merge from 'lodash/merge'

const theme = merge(
  swiss,
  {
    useColorSchemeMediaQuery: true,
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
  },
)

console.log(theme)

export default theme
