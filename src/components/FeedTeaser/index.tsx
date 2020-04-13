/** @jsx jsx */
import React from 'react'
import { jsx, Box, Card, Heading, IconButton, Image, Text } from 'theme-ui'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { Feed } from '../../../generated'

interface FeedTeaserProps {
  feed: Feed
  isSubscribed: boolean
}

const FeedTeaser: React.FC<FeedTeaserProps> = ({ feed, isSubscribed }) => {
  const {
    // id,
    images: { logo, featured },
    interests,
    postCount,
    title,
  } = feed
  return (
    <Card as="article">
      <Box
        as="header"
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <Heading as="h3">{title}</Heading>

        <IconButton aria-label={isSubscribed ? 'Unsubscribe from this feed' : 'Subscribe to this feed'}>
          <IoIosCheckmarkCircleOutline size={24} />
        </IconButton>
      </Box>

      <Image src={featured || logo} />

      <Box
        as="footer"
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <Text>{postCount} posts</Text>

        <Text>{interests.join(', ')}</Text>
      </Box>
    </Card>
  )
}

export default FeedTeaser
