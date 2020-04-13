import React, { useCallback, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useForm, ErrorMessage } from 'react-hook-form'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { Button, Input, Label } from 'theme-ui'

import { NameSpace } from '../../lib/i18n'
import SelectField, { SelectFieldOptions } from '../Form/SelectField'
import { CREATE_UPDATE_USER } from '../../lib/queries'
import useInterests from '../Hooks/useInterests'

interface RegistrationFormData {
  displayName: string
  email: string
  interests: SelectFieldOptions[]
  password: string
  username: string
}

const RegistrationForm: React.FC = () => {
  const { t } = useTranslation(NameSpace.COMMON)
  const { register, errors, handleSubmit, control } = useForm<RegistrationFormData>()
  const [userCreateOrUpdate, { data, loading, error: submissionError }] = useMutation(CREATE_UPDATE_USER)
  const { interestsOptions } = useInterests()

  const getSubmissionError = useCallback((error) => {
    if (error.message.indexOf('already exists') >= 0) {
      return <p>{t('errors.alreadyExists')}</p>
    } else if (error.message.indexOf('bad email') >= 0) {
      return <p>{t('errors.invalidEmailAddress')}</p>
    } else if (error.message.indexOf('bad username') >= 0) {
      return <p>{t('errors.invalidUsername')}</p>
    } else {
      return null
    }
  }, [])

  const onSubmit = async (formData: RegistrationFormData) => {
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
        <ErrorMessage errors={errors} name="displayName" message={t('errors.requiredField')} />
      </div>
      <div>
        <Label>Username</Label>
        <Input type="text" name="username" ref={register({ required: true })} />
        <ErrorMessage errors={errors} name="username" message={t('errors.requiredField')} />
      </div>
      <div>
        <Label>Email Address</Label>
        <Input type="email" name="email" ref={register({ required: true })} />
        <ErrorMessage errors={errors} name="email" message={t('errors.requiredField')} />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" name="password" ref={register({ required: true })} />
        <ErrorMessage errors={errors} name="password" message={t('errors.requiredField')} />
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
        <ErrorMessage errors={errors} name="interests" message={t('errors.requiredField')} />
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
