import React from 'react'
import { Box, Heading, IconButton, Image, Text } from 'theme-ui'
import { IoIosBookmark } from 'react-icons/io'

export interface FeaturedTeaserProps {
  bottomMeta?: string
  image?: string
  link: string
  onBookmarkClick?: any
  title: string
  topLowerMeta?: string
  topMeta?: string
}

const FeaturedTeaser: React.FunctionComponent<FeaturedTeaserProps> = ({
  bottomMeta,
  image,
  link,
  title,
  topMeta,
  topLowerMeta,
}) => {
  return (
    <Box
      as="article"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        mb: [2, 4],
      }}
    >
      <Box
        sx={{
          width: ['40%', 300],
          height: ['auto', 200],
        }}
      >
        <Image
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          src={image}
        />
      </Box>

      <Box
        sx={{
          ml: [2, 4],
          width: ['60%', 'calc(100% - 300px)'],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: [1, 2],
          }}
        >
          <Box>
            {topMeta && (
              <Text
                variant="textStyles.meta"
                sx={{
                  color: 'primary',
                  fontWeight: 'heading',
                }}
              >
                {topMeta}
              </Text>
            )}

            {topLowerMeta && (
              <Text
                sx={{
                  color: 'gray',
                  fontSize: 0,
                }}
              >
                {topLowerMeta}
              </Text>
            )}
          </Box>

          <IconButton>
            <IoIosBookmark size={16} />
          </IconButton>
        </Box>

        <Heading as="h3" sx={{ mb: [2, 3], fontSize: [3, 5] }}>
          {title}
        </Heading>

        <Box>
          {bottomMeta && (
            <Text
              variant="textStyles.meta"
              sx={{
                color: 'gray',
              }}
            >
              {bottomMeta}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturedTeaser
