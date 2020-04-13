import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ApolloQueryResult } from 'apollo-client'

import { GET_INTERESTS } from '../../lib/queries'
import { Interest } from '../../../generated'

export interface UseInterests {
  interestsOptions: Interest[]
  interests: Interest[]
}

const useInterests = (): UseInterests => {
  const { loading, data } = useQuery(GET_INTERESTS)

  const interests = React.useMemo(() => {
    return loading || !data ? [] : data.interestSearch
  }, [loading, data])

  const interestsOptions = React.useMemo(() => {
    return interests.map((interest) => ({ label: interest.name, value: interest.id }))
  }, [interests])

  return {
    interestsOptions,
    interests,
  }
}

export default useInterests
