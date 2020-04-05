import React from 'react'
import {ThemeProvider} from 'theme-ui'

import theme from '../components/theme'

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default ThemeWrapper
