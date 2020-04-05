import gql from 'graphql-tag'

export const GET_FEEDS = gql`
    query FeedSearch {
        feedSearch {
            copyright
            feedType
            id
            images {
                logo
                featured
            }
            interests {
                name
                slug
            }
            postCount
            posts(skip: 0, limit: 5) {
                author
                id
                images {
                    featured
                }
                publishedDate
                title
                url
            }
            title
        }
    }
`
