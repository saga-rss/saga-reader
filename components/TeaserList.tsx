import React from 'react'
import { Box, Grid, Heading } from 'theme-ui'

type Props = {
    children: any
    columns?: number
    title: string
}

const TeaserList: React.FunctionComponent<Props> = ({ children, columns = 2, title }) => {
    return (
        <Box
            as="article"
            sx={{
                '& + &': {
                    mt: [2, 4],
                },
            }}
        >
            <Heading as="h2" variant="textStyles.sectionTitle">
                {title}
            </Heading>

            <Grid columns={[1, columns]} gap={columns < 2 ? 2 : 4}>
                {children}
            </Grid>
        </Box>
    )
}

export default TeaserList
