import React from 'react'
import Head from 'next/head'
import { Box } from 'theme-ui'
import Header from '../components/Header'

const Today = () => (
  <>
    <Head>
      <title>Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Box as="main"></Box>
  </>
)

export default Today
