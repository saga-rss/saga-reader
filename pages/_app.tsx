import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { withApollo } from '../lib/apollo'
import ThemeWrapper from '../components/ThemeWrapper'

const SagaApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeWrapper>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Cormorant:500,700|PT+Sans:400,400i,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </ThemeWrapper>
    )
}

export default withApollo()(SagaApp)
