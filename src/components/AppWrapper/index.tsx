import React from 'react'
import { ThemeProvider } from 'theme-ui'

import theme from '../theme'

const AppWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppWrapper
