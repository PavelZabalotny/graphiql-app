import { Box, Button, TextField, Typography } from '@mui/material'
import { type FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useSelector } from 'react-redux'

import { NavLink, useNavigate } from 'react-router-dom'

import styles from './Login.module.scss'

import { emailPattern, passwordPattern } from '@/common/constants.ts'
import { logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from '@/firebase/firebase.ts'
import { RoutePaths } from '@/routes/routerPaths'
import { useAppSelector } from '@/store/hooks.ts'

import type { RootState } from '@/store/store.ts'

export interface LoginForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const errorPasswordMessage = 'Password must contain: min 8 symbols, at least 1 letter, 1 digit, 1 special char'

const errorEmailMessage = 'Invalid email address'

const errorEmptyInput = 'Required field'

const errorMinLength = 'Name must contain at least 3 letters'

const textFieldStyles = {
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid white',
  },
  '&&:hover .MuiInput-underline:before': {
    borderBottom: '1px solid white',
  },
  '& label': {
    color: 'gray',
  },
  '& .MuiInputBase-root': {
    color: 'white',
  },
}

interface Props {
  isLogin: boolean
}

const Login: FC<Props> = ({ isLogin }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginForm>({ mode: 'onTouched' })
  const navigate = useNavigate()
  const isUserLoggedIn = useAppSelector((state) => state.user.isLoggedIn)

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate(RoutePaths.GraphiQL)
    }
  }, [isUserLoggedIn, navigate])

  function onSubmit(data: LoginForm) {
    if (isValid) {
      if (isLogin) {
        const { email, password } = data
        void logInWithEmailAndPassword(email, password)
      }
      if (!isLogin) {
        const { name, email, password } = data
        void registerWithEmailAndPassword(name, email, password)
      }
    }
  }

  const translations = useSelector((state: RootState) => state.localization.translations)

  return (
    <>
      {!isUserLoggedIn && (
        <Box component='form' className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <Typography variant='h5' align='center' className={styles.title}>
            {isLogin ? translations.signin : translations.signup}
          </Typography>
          {!isLogin && (
            <Controller
              render={({ field }) => (
                <TextField
                  className={styles.text_field}
                  {...field}
                  type='text'
                  label={translations.name}
                  error={errors.name != null}
                  helperText={errors.name?.message}
                  variant='standard'
                  color='warning'
                  sx={textFieldStyles}
                />
              )}
              name='name'
              control={control}
              defaultValue=''
              rules={{
                required: { value: true, message: errorEmptyInput },
                minLength: { value: 3, message: errorMinLength },
              }}
            />
          )}

          <Controller
            render={({ field }) => (
              <TextField
                className={styles.text_field}
                {...field}
                type='email'
                label={translations.email}
                error={errors.email != null}
                helperText={errors.email?.message}
                variant='standard'
                color='warning'
                sx={textFieldStyles}
              />
            )}
            name='email'
            control={control}
            defaultValue=''
            rules={{
              required: { value: true, message: errorEmptyInput },
              pattern: { value: emailPattern, message: errorEmailMessage },
            }}
          />
          <Controller
            render={({ field }) => (
              <TextField
                className={styles.text_field}
                {...field}
                type='password'
                label={translations.password}
                error={errors.password != null}
                helperText={errors.password?.message}
                variant='standard'
                color='warning'
                sx={textFieldStyles}
              />
            )}
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: { value: true, message: errorEmptyInput },
              pattern: { value: passwordPattern, message: errorPasswordMessage },
            }}
          />

          {!isLogin && (
            <Controller
              render={({ field }) => (
                <TextField
                  className={styles.text_field}
                  {...field}
                  type='password'
                  label={translations.confirmPassword}
                  error={errors.confirmPassword != null}
                  helperText={errors.confirmPassword?.message}
                  variant='standard'
                  color='warning'
                  sx={textFieldStyles}
                />
              )}
              name='confirmPassword'
              control={control}
              defaultValue=''
              rules={{
                required: { value: true, message: errorEmptyInput },
                pattern: { value: passwordPattern, message: errorPasswordMessage },
              }}
            />
          )}

          {isLogin && (
            <>
              <Button type='submit' variant='contained' size='large' disabled={!isValid} color='warning' sx={{ mt: 5 }}>
                {translations.signin}
              </Button>
              <Button variant='outlined' onClick={signInWithGoogle} color='warning'>
                {translations.googleLog}
              </Button>
              <Typography variant='subtitle1' align='center' color='white'>
                {translations.accountN}
                <br />
                <NavLink to={RoutePaths.SignUp} className={styles.link}>
                  {translations.signup}
                </NavLink>{' '}
                {translations.now}
              </Typography>
            </>
          )}

          {!isLogin && (
            <>
              <Button type='submit' variant='contained' size='large' disabled={!isValid} color='warning' sx={{ mt: 2 }}>
                {translations.signup}
              </Button>
              <Button variant='outlined' onClick={signInWithGoogle} color='warning'>
                {translations.googleReg}
              </Button>
              <Typography variant='subtitle1' align='center' color='white'>
                {translations.accountY}
                <br />
                <NavLink to={RoutePaths.SignIn} className={styles.link}>
                  {translations.signin}
                </NavLink>{' '}
                {translations.now}
              </Typography>
            </>
          )}
        </Box>
      )}
    </>
  )
}

export default Login
