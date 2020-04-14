import gql from 'graphql-tag'

export const CREATE_UPDATE_USER = gql`
  mutation UserCreateOrUpdate($displayName: String!, $email: String!, $password: String!, $username: String!) {
    userCreateOrUpdate(displayName: $displayName, email: $email, password: $password, username: $username) {
      displayName
      email
      token
      username
    }
  }
`

export const LOGIN_USER = gql`
  query LoginUser($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      displayName
      email
      token
      username
    }
  }
`

export const GET_INTERESTS = gql`
  query InterestSearch {
    interestSearch {
      slug
      name
      id
      children {
        slug
        name
        id
      }
    }
  }
`

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
