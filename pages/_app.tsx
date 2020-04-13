import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { withApollo } from '../lib/apollo'
import AppWrapper from '../components/AppWrapper'

const SagaApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Cormorant:500,700|PT+Sans:400,400i,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default withApollo()(SagaApp)
