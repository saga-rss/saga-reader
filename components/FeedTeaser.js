/** @jsx jsx */

import {
  jsx,
  Card,
  Heading,
  IconButton,
  Image,
  Text,
} from 'theme-ui'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'


const FeedTeaser = ({ feed, isSubscribed }) => {
  const {
    // id,
    image,
    interests,
    postCount,
    title,
  } = feed
  return (
    <Card as="article">
      <header sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
        <Heading as="h3">{title}</Heading>

        <IconButton aria-label={
          isSubscribed
            ? 'Unsubscribe from this feed'
            : 'Subscribe to this feed'
        }>
          <IoIosCheckmarkCircleOutline size={24}/>
        </IconButton>
      </header>

      {image && (
        <Image src={image}/>
      )}

      <footer sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
        <Text>{postCount} posts</Text>

        <Text>{interests.join(', ')}</Text>
      </footer>
    </Card>
  )
}

export default FeedTeaser
