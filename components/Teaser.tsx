import React from 'react'
import { Box, Heading, IconButton, Image, Text } from 'theme-ui'
// import Link from 'next/link'
import { IoIosBookmark } from 'react-icons/io'

type Props = {
  bottomMeta?: string
  image?: string
  link: string
  onBookmarkClick?: any
  title: string
  topLowerMeta?: string
  topMeta?: string
  variant?: 'left' | 'right' | 'leftCompact' | 'rightCompact'
}

const Teaser: React.FunctionComponent<Props> = ({
  bottomMeta,
  image,
  link,
  title,
  topMeta,
  topLowerMeta,
  variant = 'left',
}) => {
  const isCompact = variant.toLowerCase().indexOf('compact') >= 0
  const isLeft = variant.toLowerCase().indexOf('left') >= 0
  const isRight = variant.toLowerCase().indexOf('right') >= 0

  return (
    <Box
      as="article"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        variant: `teaser.${variant}`,
      }}
    >
      <Box
        sx={{
          width: ['40%', 100],
          height: ['auto', 100],
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
          ml: isLeft ? [2, 4] : 0,
          mr: isRight ? [2, 4] : 0,
          width: ['60%', 'calc(100% - 100px)'],
        }}
      >
        {!isCompact && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 1,
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
        )}

        <Heading as="h3" sx={{ mb: 2, fontSize: 2 }}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Heading>

        {!isCompact && (
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
        )}
      </Box>
    </Box>
  )
}

export default Teaser
