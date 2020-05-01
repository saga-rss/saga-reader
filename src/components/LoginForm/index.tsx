import React, { useCallback, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { useForm, ErrorMessage } from 'react-hook-form'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { Box, Button, Input, Label, Text } from 'theme-ui'

import { NameSpace } from '../../lib/i18n'
import { LOGIN_USER } from '../../lib/queries'
import { FormRow, FormControl } from '../../ui/Form'

interface LoginFormData {
  email: string
  password: string
}

interface LoginFormProps {
  onRegisterClick: () => any
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick }) => {
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
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          width: ['90%', '70%', 'sidebarColumn'],
        }}
      >
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
              {t('label.login')}
            </Button>
          </FormRow>

          <FormRow>
            <Text sx={{ fontSize: 0 }}>
              {t('login.needAccount')}{' '}
              <Button variant="text" onClick={() => onRegisterClick()}>
                {t('login.registerNow')}
              </Button>
            </Text>
          </FormRow>
        </form>
      </Box>
    </Box>
  )
}

export default LoginForm
