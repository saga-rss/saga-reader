import Head from 'next/head'
import {
  Box,
  Heading,
} from 'theme-ui'
import Header from '../components/Header'
import FeedTeaser from '../components/FeedTeaser'

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Box as="main">
      <Heading as="h2">Feeds</Heading>
    </Box>
  </>
)

export default Home
