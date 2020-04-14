import React, { useCallback, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm, ErrorMessage } from 'react-hook-form'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { Box, Button, Input, Label } from 'theme-ui'

import { NameSpace } from '../../lib/i18n'
import { LOGIN_USER } from '../../lib/queries'
import { FormRow, FormControl } from '../../ui/Form'

interface LoginFormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const { t } = useTranslation(NameSpace.COMMON)
  const { register, errors, handleSubmit } = useForm<LoginFormData>()
  const [userLogin, { data, loading, error: submissionError }] = useLazyQuery(LOGIN_USER)

  const getSubmissionError = useCallback((error) => {
    if (error.message.indexOf('user not found') >= 0) {
      return <p>{t('errors.userNotFound')}</p>
    } else if (error.message.indexOf('invalid password') >= 0) {
      return <p>{t('errors.invalidPassword')}</p>
    } else {
      return null
    }
  }, [])

  const onSubmit = async (formData: LoginFormData) => {
    await userLogin({
      variables: formData,
    })
  }

  useEffect(() => {
    if (data && data.userLogin && data.userLogin.token) {
      Cookies.set('saga_token', data.userLogin.token, {
        expires: new Date(new Date().getTime() + 30 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV !== 'development',
      })
    }
  }, [data])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}
    >
      <img src="https://placehold.it/350/350" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {submissionError && getSubmissionError(submissionError)}

        <FormRow inline>
          <FormControl>
            <Label>{t('label.emailAddress')}</Label>
            <Input type="email" name="email" ref={register({ required: true })} />
            <ErrorMessage errors={errors} name="email" message={t('errors.requiredField')} />
          </FormControl>
        </FormRow>

        <FormRow inline>
          <FormControl>
            <Label>{t('label.password')}</Label>
            <Input type="password" name="password" ref={register({ required: true })} />
            <ErrorMessage errors={errors} name="password" message={t('errors.requiredField')} />
          </FormControl>
        </FormRow>

        <FormRow>
          <Button disabled={loading} type="submit">
            {t('label.createAccount')}
          </Button>
        </FormRow>
      </form>
    </Box>
  )
}

export default LoginForm
