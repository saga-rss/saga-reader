import React from 'react'
import Head from 'next/head'
import { Box } from 'theme-ui'

import Header from '../components/Header'
import RegistrationForm from '../components/RegistrationForm'

const Home = () => {
  return (
    <>
      <Head>
        <title>Saga Reader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box
        as="main"
        sx={{
          maxWidth: 1120,
          mx: 'auto',
          py: [2, 4],
          px: [2, 0],
        }}
      >
        <RegistrationForm />
      </Box>
    </>
  )
}

export default Home
