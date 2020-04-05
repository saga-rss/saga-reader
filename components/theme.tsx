import swiss from '@theme-ui/preset-swiss'
import merge from 'lodash/merge'

const theme = merge(swiss, {
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
            },
        },
    },
    styles: {
        a: {
            cursor: 'pointer',
        },
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
})

export default theme
