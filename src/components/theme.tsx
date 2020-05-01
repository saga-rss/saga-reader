import swiss from '@theme-ui/preset-swiss'
import merge from 'lodash/merge'

const siteWidth = 1120

const theme = merge(swiss, {
  buttons: {
    text: {
      appearance: 'none',
      color: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: 0,
      padding: 0,
      textDecoration: 'underline',
    },
  },
  colors: {
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    },
  },
  fonts: {
    body: '"PT Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    heading: 'Cormorant, Garamond, serif',
  },
  forms: {
    input: {
      borderColor: 'gray',
    },
    label: {
      textTransform: 'uppercase',
      fontSize: 0,
      fontWeight: 'bold',
    },
  },
  styles: {
    a: {
      cursor: 'pointer',
    },
  },
  sizes: {
    siteWidth,
    mainColumn: Math.floor(siteWidth * 0.6),
    sidebarColumn: Math.floor(siteWidth * 0.4),
  },
  teaser: {
    left: {
      flexDirection: ['column', 'row'],
    },
    leftCompact: {
      variant: 'teaser.left',
    },
    right: {
      flexDirection: ['column', 'row-reverse'],
    },
    rightCompact: {
      variant: 'teaser.right',
    },
  },
  textStyles: {
    meta: {
      fontSize: 0,
      textTransform: 'uppercase',
    },
    sectionTitle: {
      borderBottom: '1px solid',
      borderColor: 'gray',
      pb: 2,
      mb: 3,
    },
  },
  useColorSchemeMediaQuery: true,
})

console.log(theme)

export default theme
