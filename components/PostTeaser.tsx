import {
  Box,
  Heading,
  IconButton,
  Image,
  Text,
} from 'theme-ui'
import {IoIosBookmark} from 'react-icons/io'

type Props = {
  title: string;
  topMeta?: string;
  bottomMeta?: string;
}

const PostTeaser: React.FunctionComponent<Props> = (
  {
    bottomMeta,
    title,
    topMeta,
  }
) => {
  return (
    <Box as="article" sx={{
      display: 'flex',
      alignItems: 'flex-start',
      mb: [2, 4],
    }}>
      <Box sx={{
        width: ['40%', 300],
        height: ['auto', 200]
      }}>
        <Image
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          src="https://via.placeholder.com/300x200"/>
      </Box>

      <Box sx={{
        ml: [2, 4],
        width: ['60%', 'calc(100% - 300px)']
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: [1, 2]
        }}>
          <Text variant="textStyles.meta" sx={{
            color: 'primary',
            fontWeight: 'heading'
          }}>
            {topMeta}
          </Text>

          <IconButton>
            <IoIosBookmark size={16}/>
          </IconButton>
        </Box>

        <Heading as="h3" sx={{mb: 2, fontSize: [3, 5]}}>{title}</Heading>

        <Box>
          <Text variant="textStyles.meta" sx={{
            color: 'gray'
          }}>
            {bottomMeta}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default PostTeaser
