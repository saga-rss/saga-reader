import App from 'next/app'
import Head from "next/head"
import { ThemeProvider } from 'theme-ui'

import theme from '../components/theme'

export default class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Cormorant:500,700|PT+Sans:400,400i,700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
