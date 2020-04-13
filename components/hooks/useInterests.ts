import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_INTERESTS } from '../../lib/queries'
import { ApolloQueryResult } from 'apollo-client'

export interface SagaInterest {
  children: SagaInterest[]
  id: string
  name: string
  slug: string
}

export interface UseInterests {
  interestsOptions: SagaInterest[]
  interests: SagaInterest[]
  refetch: any
}

const useInterests = (): UseInterests => {
  const { loading, data, refetch } = useQuery(GET_INTERESTS)

  const interests = React.useMemo(() => {
    return loading || !data ? [] : data.interestSearch
  }, [loading, data])

  const interestsOptions = React.useMemo(() => {
    return interests.map((interest) => ({ label: interest.name, value: interest.id }))
  }, [interests])

  return {
    interestsOptions,
    interests,
    refetch,
  }
}

export default useInterests
