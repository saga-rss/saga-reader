import Head from 'next/head'
import {
  Box,
  Grid,
  Heading,
} from 'theme-ui'
import Header from '../components/Header'
import FeaturedTeaser from '../components/FeaturedTeaser'
import Teaser from '../components/Teaser'
import TeaserList from '../components/TeaserList'

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <Header/>

    <Box as="main"sx={{
      maxWidth: 1120,
      mx: 'auto',
      py: [2, 4],
      px: [2, 0],
    }}>
      <Grid columns={[1, '3fr 1fr']} gap={4}>
        <Box>
          <FeaturedTeaser
            title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
            topMeta="March 22, 2019"
            topLowerMeta="2min reading time"
            bottomMeta="New York Times"
            image="https://via.placeholder.com/300x200"
            link="https://www.duckduckgo.com"
          />

          <TeaserList title="Film & Video" columns={2}>
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
          </TeaserList>

          <TeaserList title="Daily News" columns={2}>
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
          </TeaserList>

          <TeaserList title="Entertainment" columns={2}>
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              topMeta="March 22, 2019"
              bottomMeta="New York Times"
              image="https://via.placeholder.com/300x200"
              link="https://www.duckduckgo.com"
            />
          </TeaserList>
        </Box>

        <Box>
          <TeaserList title="Daily News" columns={1}>
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              image="https://via.placeholder.com/300x200"
              variant="leftCompact"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              image="https://via.placeholder.com/300x200"
              variant="leftCompact"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              image="https://via.placeholder.com/300x200"
              variant="leftCompact"
              link="https://www.duckduckgo.com"
            />
            <Teaser
              title="Aquariums and Zoos livestreaming so that people can watch animals while social distancing!"
              image="https://via.placeholder.com/300x200"
              variant="leftCompact"
              link="https://www.duckduckgo.com"
            />
          </TeaserList>
        </Box>

      </Grid>
    </Box>
  </>
)

export default Home
