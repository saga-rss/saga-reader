import React, { useCallback, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useForm, ErrorMessage } from 'react-hook-form'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { Box, Button, Input, Label, Text } from 'theme-ui'

import { NameSpace } from '../../lib/i18n'
import SelectField, { SelectFieldOptions } from '../../ui/Form/SelectField'
import { CREATE_UPDATE_USER } from '../../lib/queries'
import useInterests from '../Hooks/useInterests'
import { FormRow, FormControl } from '../../ui/Form'

interface RegistrationFormData {
  displayName: string
  email: string
  interests: SelectFieldOptions[]
  password: string
  username: string
}

interface RegistrationFormProps {
  onLoginClick: () => void
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onLoginClick }) => {
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
              <Label>{t('label.displayName')}</Label>
              <Input type="text" name="displayName" ref={register({ required: true })} />
              <ErrorMessage errors={errors} name="displayName" message={t('errors.requiredField')} />
            </FormControl>

            <FormControl>
              <Label>{t('label.username')}</Label>
              <Input type="text" name="username" ref={register({ required: true })} />
              <ErrorMessage errors={errors} name="username" message={t('errors.requiredField')} />
            </FormControl>
          </FormRow>

          <FormRow inline>
            <FormControl>
              <Label>{t('label.emailAddress')}</Label>
              <Input type="email" name="email" ref={register({ required: true })} />
              <ErrorMessage errors={errors} name="email" message={t('errors.requiredField')} />
            </FormControl>

            <FormControl>
              <Label>{t('label.password')}</Label>
              <Input type="password" name="password" ref={register({ required: true })} />
              <ErrorMessage errors={errors} name="password" message={t('errors.requiredField')} />
            </FormControl>
          </FormRow>

          <FormRow>
            <FormControl>
              <Label>{t('label.interests')}</Label>
              <SelectField
                options={interestsOptions}
                name="interests"
                control={control}
                rules={{ required: true }}
                instanceId="registrationInterests"
              />
              <ErrorMessage errors={errors} name="interests" message={t('errors.requiredField')} />
            </FormControl>
          </FormRow>

          <FormRow>
            <Button disabled={loading} type="submit">
              {t('label.createAccount')}
            </Button>
          </FormRow>

          <FormRow>
            <Text sx={{ fontSize: 0 }}>
              {t('register.haveAccount')}{' '}
              <Button variant="text" onClick={() => onLoginClick()}>
                {t('register.loginNow')}
              </Button>
            </Text>
          </FormRow>
        </form>
      </Box>
    </Box>
  )
}

export default RegistrationForm
