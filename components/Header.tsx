/** @jsx jsx */

import {
  jsx,
  Box,
  Flex,
  Link as UILink,
} from 'theme-ui'
import Link from 'next/link'

const Header: React.FunctionComponent = () => {
  return (
    <Box as="header" sx={{
      borderBottom: '1px solid #eaeaea'
    }}>
      <Flex sx={{
        py: [2, 3],
        px: [2, 4],
      }}>

        <Box sx={{
          pr: 4,
          mr: 4,
          borderRight: '1px solid #eaeaea',
        }}>
          <Link href="/">
            <UILink sx={{ variant: 'styles.a' }}>
              SAGA
            </UILink>
          </Link>
        </Box>

        <Flex as="nav">
          <Link href="/today">
            <UILink sx={{ variant: 'styles.a', mr: 4 }}>
              Today
            </UILink>
          </Link>

          <Link href="/bookmarks">
            <UILink sx={{ variant: 'styles.a', mr: 4 }}>
              Bookmarks
            </UILink>
          </Link>

          <Link href="/interests">
            <UILink sx={{ variant: 'styles.a' }}>
              Interests
            </UILink>
          </Link>
        </Flex>

      </Flex>
    </Box>
  )
}

export default Header
