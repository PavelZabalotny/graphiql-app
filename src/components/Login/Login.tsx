import { Box, Button, TextField, Typography } from '@mui/material'
import { type FC, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Controller, useForm } from 'react-hook-form'

import { NavLink, useNavigate } from 'react-router-dom'

import styles from './Login.module.scss'

import { emailPattern, passwordPattern } from '@/common/constants.ts'
import Loading from '@/common/Loading/Loading.tsx'
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from '@/firebase/firebase.ts'

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

interface Props {
  isLogin: boolean
}

const Login: FC<Props> = ({ isLogin }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginForm>({ mode: 'onTouched' })
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user != null) {
      navigate('/graphiql')
    }
  }, [user, navigate])

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

  return (
    <>
      {loading || user != null ? (
        <Loading />
      ) : (
        <Box component='form' className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          {!isLogin && (
            <Controller
              render={({ field }) => (
                <TextField
                  className={styles.text_field}
                  {...field}
                  type='text'
                  label='Name'
                  error={errors.name != null}
                  helperText={errors.name?.message}
                  variant='filled'
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
                label='Email'
                error={errors.email != null}
                helperText={errors.email?.message}
                variant='filled'
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
                label='Password'
                error={errors.password != null}
                helperText={errors.password?.message}
                variant='filled'
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
                  label='Confirm password'
                  error={errors.confirmPassword != null}
                  helperText={errors.confirmPassword?.message}
                  variant='filled'
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
              <Button type='submit' variant='contained' size='large' disabled={!isValid}>
                Login
              </Button>
              <Button variant='outlined' onClick={signInWithGoogle}>
                Login with Google
              </Button>
              <Typography variant='subtitle1' align='center'>
                Don&apos;t have account?
                <br />
                <NavLink to='/signup'>Register</NavLink> now.
              </Typography>
            </>
          )}

          {!isLogin && (
            <>
              <Button type='submit' variant='contained' size='large' disabled={!isValid}>
                Register
              </Button>
              <Button variant='outlined' onClick={signInWithGoogle}>
                Register with Google
              </Button>
              <Typography variant='subtitle1' align='center'>
                Already have an account?
                <br />
                <NavLink to='/signin'>Login</NavLink> now.
              </Typography>
            </>
          )}
        </Box>
      )}
    </>
  )
}

export default Login
