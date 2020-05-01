import React, { FC, useState } from 'react'
import Head from 'next/head'
import { Box } from 'theme-ui'

import { withApollo } from '../lib/apollo'
import RegistrationForm from '../components/RegistrationForm'
import LoginForm from '../components/LoginForm'

const Home: FC<{ hasAccount?: boolean }> = ({ hasAccount = false }) => {
  const [register, setRegister] = useState(hasAccount)

  return (
    <>
      <Head>
        <title>Saga Reader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        as="main"
        sx={{
          maxWidth: 1120,
          mx: 'auto',
          py: [2, 4],
          px: [2, 0],
        }}
      >
        {register && <RegistrationForm onLoginClick={() => setRegister(false)} />}
        {!register && <LoginForm onRegisterClick={() => setRegister(true)} />}
      </Box>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
