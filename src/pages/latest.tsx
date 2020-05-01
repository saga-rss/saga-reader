import React from 'react'
import Head from 'next/head'
import { Box, Grid } from 'theme-ui'
import { useQuery } from '@apollo/react-hooks'

import { withApollo } from '../lib/apollo'
import { GET_FEEDS } from '../lib/queries'
import Header from '../components/Header'
import FeaturedTeaser from '../components/FeaturedTeaser'
import Teaser from '../components/Teaser'
import TeaserList from '../components/TeaserList'

const Latest = () => {
  const feeds = useQuery(GET_FEEDS)

  return (
    <>
      <Head>
        <title>The Latest</title>
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
        <Grid columns={[1, '3fr 1fr']} gap={4}>
          <Box>
            {!feeds.loading &&
              feeds.data.feedSearch.map((feed) => (
                <>
                  {feed.posts.slice(0, 1).map((post) => (
                    <FeaturedTeaser
                      key={post.id}
                      title={post.title}
                      topMeta={post.publishedDate}
                      bottomMeta={(feed.publisher || post.author) + ' ' + post.id}
                      image={post.images.featured || feed.images.featured || feed.images.logo}
                      link={post.url}
                    />
                  ))}
                  <TeaserList title={feed.title} columns={2} key={feed.id}>
                    {feed.posts.slice(1).map((post) => (
                      <Teaser
                        key={post.id}
                        title={post.title}
                        topMeta={post.publishedDate}
                        bottomMeta={(feed.publisher || post.author) + ' ' + post.id}
                        image={post.images.featured || feed.images.featured || feed.images.logo}
                        link={post.url}
                        variant="right"
                      />
                    ))}
                  </TeaserList>
                </>
              ))}
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
}

export default withApollo({ ssr: true })(Latest)
