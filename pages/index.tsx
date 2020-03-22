import Head from 'next/head'
import {
  Box,
  Heading,
} from 'theme-ui'
import Header from '../components/Header'
import PostTeaser from '../components/PostTeaser'
import TeaserList from '../components/TeaserList'

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <Header/>

    <Box as="main">
      <Heading as="h2">Feeds</Heading>

      <TeaserList title="Daily News">
        <PostTeaser
          title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
          topMeta="March 22, 2019"
          bottomMeta="New York Times"
        />
        <PostTeaser
          title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
          topMeta="March 22, 2019"
          bottomMeta="New York Times"
        />
        <PostTeaser
          title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
          topMeta="March 22, 2019"
          bottomMeta="New York Times"
        />
        <PostTeaser
          title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
          topMeta="March 22, 2019"
          bottomMeta="New York Times"
        />
      </TeaserList>
    </Box>
  </>
)

export default Home
