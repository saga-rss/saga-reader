import React, { useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useForm, ErrorMessage } from 'react-hook-form'
import Cookies from 'js-cookie'
import { Button, Input, Label } from 'theme-ui'

import SelectField from '../Form/SelectField'
import { CREATE_UPDATE_USER } from '../../lib/queries'
import useInterests from '../hooks/useInterests'
import { Interest } from '../../generated'

interface RegistrationFormData {
  displayName: string
  email: string
  interests: Interest[]
  password: string
  username: string
}

const getSubmissionError: React.FC<Error> | null = (error) => {
  if (error.message.indexOf('already exists') >= 0) {
    return <p>this email or username already exists</p>
  } else {
    return null
  }
}

const RegistrationForm: React.FC = () => {
  const { register, errors, handleSubmit, control } = useForm<RegistrationFormData>()
  const [userCreateOrUpdate, { data, loading, error: submissionError }] = useMutation(CREATE_UPDATE_USER)
  const { interestsOptions } = useInterests()

  const onSubmit = async (formData) => {
    await userCreateOrUpdate({
      variables: {
        ...formData,
        interests: formData.interests.map((interest) => interest.value),
      },
    })
  }

  useEffect(() => {
    if (data && data.userCreateOrUpdate && data.userCreateOrUpdate.token) {
      Cookies.set('saga_token', data.userCreateOrUpdate.token, {
        expires: new Date(new Date().getTime() + 30 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV !== 'development',
      })
    }
  }, [data])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submissionError && getSubmissionError(submissionError)}

      <div>
        <Label>Display Name</Label>
        <Input type="text" name="displayName" ref={register({ required: true })} />
        <ErrorMessage errors={errors} name="displayName " />
      </div>
      <div>
        <Label>Username</Label>
        <Input type="text" name="username" ref={register({ required: true })} />
        <ErrorMessage errors={errors} name="username " />
      </div>
      <div>
        <Label>Email Address</Label>
        <Input type="email" name="email" ref={register({ required: true })} />
        <ErrorMessage errors={errors} name="email " />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" name="password" ref={register({ required: true })} />
        <ErrorMessage errors={errors} name="password " />
      </div>
      <div>
        <Label>Interests</Label>
        <SelectField
          options={interestsOptions}
          name="interests"
          control={control}
          rules={{ required: true }}
          instanceId="registrationInterests"
        />
        <ErrorMessage errors={errors} name="interests" />
      </div>
      <div>
        <Button disabled={loading} type="submit">
          Register
        </Button>
      </div>
    </form>
  )
}

export default RegistrationForm
