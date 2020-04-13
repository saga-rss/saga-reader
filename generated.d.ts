export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `ObjectId` scalar type represents a mongodb unique ID */
  ObjectId: any
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: Date
  /**
   * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Feed = {
  __typename?: 'Feed'
  canonicalUrl?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  favoriteCount?: Maybe<Scalars['Int']>
  feedType?: Maybe<FeedType>
  feedUrl: Scalars['String']
  id: Scalars['ObjectId']
  identifier?: Maybe<Scalars['String']>
  interests?: Maybe<Array<Maybe<Interest>>>
  images?: Maybe<FeedImage>
  isFeatured?: Maybe<Scalars['Boolean']>
  isPublic?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  posts?: Maybe<Array<Maybe<Post>>>
  postCount?: Maybe<Scalars['Int']>
  publishedDate?: Maybe<Scalars['DateTime']>
  publisher?: Maybe<Scalars['String']>
  subscriptionCount?: Maybe<Scalars['Int']>
  summary?: Maybe<Scalars['String']>
  themeColor?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedDate?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
}

export type FeedPostsArgs = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type FeedImage = {
  __typename?: 'FeedImage'
  featured?: Maybe<Scalars['String']>
  favicon?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
}

export enum FeedType {
  Audio = 'audio',
  Video = 'video',
  Article = 'article',
}

export type Interest = {
  __typename?: 'Interest'
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ObjectId']>
  children?: Maybe<Array<Maybe<Interest>>>
}

export type Mutation = {
  __typename?: 'Mutation'
  feedCreate?: Maybe<Array<Maybe<Feed>>>
  feedSubscribe?: Maybe<Feed>
  feedUnsubscribe?: Maybe<Feed>
  interestCreate?: Maybe<Interest>
  interestUpdate?: Maybe<Interest>
  userCreateOrUpdate?: Maybe<User>
  userUpdate?: Maybe<User>
}

export type MutationFeedCreateArgs = {
  feedUrl: Scalars['String']
  interests?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
}

export type MutationFeedSubscribeArgs = {
  feedId: Scalars['ObjectId']
}

export type MutationFeedUnsubscribeArgs = {
  feedId: Scalars['ObjectId']
}

export type MutationInterestCreateArgs = {
  name: Scalars['String']
  parent?: Maybe<Scalars['ObjectId']>
}

export type MutationInterestUpdateArgs = {
  name?: Maybe<Scalars['String']>
  parent?: Maybe<Scalars['ObjectId']>
  id: Scalars['ObjectId']
}

export type MutationUserCreateOrUpdateArgs = {
  displayName: Scalars['String']
  email: Scalars['String']
  interests?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  password: Scalars['String']
  username: Scalars['String']
}

export type PaginationSettings = {
  __typename?: 'PaginationSettings'
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type Post = {
  __typename?: 'Post'
  author?: Maybe<Scalars['String']>
  canonicalUrl?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  commentUrl?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  direction?: Maybe<Scalars['String']>
  enclosures?: Maybe<Array<Maybe<PostEnclosure>>>
  favoriteCount?: Maybe<Scalars['Int']>
  feed?: Maybe<Feed>
  guid?: Maybe<Scalars['String']>
  images?: Maybe<PostImage>
  id: Scalars['ObjectId']
  identifier: Scalars['String']
  interests?: Maybe<Array<Maybe<Scalars['String']>>>
  isPublic?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  postType?: Maybe<FeedType>
  postUpdatedDate?: Maybe<Scalars['DateTime']>
  publishedDate?: Maybe<Scalars['DateTime']>
  summary?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
  wordCount?: Maybe<Scalars['Int']>
}

export type PostEnclosure = {
  __typename?: 'PostEnclosure'
  description?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['String']>
  id: Scalars['ObjectId']
  length?: Maybe<Scalars['String']>
  medium?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['String']>
}

export type PostImage = {
  __typename?: 'PostImage'
  favicon?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  feedById?: Maybe<Feed>
  feedSearch?: Maybe<Array<Maybe<Feed>>>
  interestSearch?: Maybe<Array<Maybe<Interest>>>
  postById?: Maybe<Post>
  userById?: Maybe<User>
  userLogin?: Maybe<User>
  userSearch?: Maybe<Array<Maybe<User>>>
}

export type QueryFeedByIdArgs = {
  id: Scalars['ObjectId']
}

export type QueryFeedSearchArgs = {
  sort?: Maybe<Sort>
  sortDirection?: Maybe<SortDirection>
}

export type QueryPostByIdArgs = {
  id: Scalars['ObjectId']
}

export type QueryUserByIdArgs = {
  id: Scalars['ObjectId']
}

export type QueryUserLoginArgs = {
  email: Scalars['String']
  password?: Maybe<Scalars['String']>
}

export type QueryUserSearchArgs = {
  sort?: Maybe<Sort>
}

export enum Sort {
  Title = 'title',
  FavoriteCount = 'favoriteCount',
  PostCount = 'postCount',
  Relevance = 'relevance',
  UpdatedDate = 'updatedDate',
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type User = {
  __typename?: 'User'
  bio?: Maybe<Scalars['String']>
  displayName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ObjectId']
  interests?: Maybe<Array<Maybe<Scalars['ObjectId']>>>
  isActive?: Maybe<Scalars['Boolean']>
  isAdmin?: Maybe<Scalars['Boolean']>
  username?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  token?: Maybe<Scalars['String']>
}
