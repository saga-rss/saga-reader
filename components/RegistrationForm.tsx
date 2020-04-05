import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'

import { REGISTER_USER } from '../lib/queries'
import { Button, Input, Label } from 'theme-ui'

const RegistrationForm: React.FunctionComponent = () => {
  const { register, errors, handleSubmit } = useForm()
  const [userCreate, { data, loading }] = useMutation(REGISTER_USER)

  const onSubmit = async (formData) => {
    await userCreate({ variables: formData })
  }

  console.log(errors)
  console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Display Name</Label>
        <Input type="text" name="displayName" ref={register({ required: true })} />
      </div>
      <div>
        <Label>Username</Label>
        <Input type="text" name="username" ref={register({ required: true })} />
      </div>
      <div>
        <Label>Email Address</Label>
        <Input type="email" name="email" ref={register({ required: true })} />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" name="password" ref={register({ required: true })} />
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
