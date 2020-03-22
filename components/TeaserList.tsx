import {
  Box,
  Heading,
  IconButton,
  Image,
  Text,
} from 'theme-ui'
import {IoIosBookmark} from 'react-icons/io'

type Props = {
  children: any;
  title: string;
}

const TeaserList: React.FunctionComponent<Props> = ({ children, title }) => {
  return (
    <Box as="article">
      <Heading as="h2">{title}</Heading>

      {children}
    </Box>
  )
}

export default TeaserList
