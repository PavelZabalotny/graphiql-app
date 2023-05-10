import { Container, Button, Select, MenuItem, FormControl } from '@mui/material'

import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import type { SelectChangeEvent } from '@mui/material'

import './Header.module.scss'

interface HeaderProps {
  state: boolean
}

const Header = ({ state }: HeaderProps) => {
  const [language, setLanguage] = useState(1)
  const [loggedIn, setLoggedIn] = useState(state)

  const handleDropdownChange = (event: SelectChangeEvent<'name'>) => {
    const value = Number(event.target.value)
    setLanguage(value)
  }

  useEffect(() => {
    setLoggedIn(state)
  }, [state])

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToSignInPage = () => {
    !loggedIn ? navigate('/signin') : setLoggedIn(false)
  }

  const goToSignUpPage = () => {
    navigate('/signup')
  }

  const goToGraphQl = () => {
    navigate('/graphiql')
  }

  return (
    <header>
      <Container sx={{ display: 'flex', justifyContent: 'space-around', wisth: '145px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '306px',
            height: '49px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: '39px', height: '39px', backgroundColor: '#1C3E48' }} />
            <span style={{ fontWeight: '600', marginLeft: '5px', color: '#1C3E48' }}>GraphiQL</span>
          </div>
          <Button
            variant='text'
            sx={
              loggedIn
                ? { color: '#1C3E48', zIndex: '100', visibility: 'visible' }
                : { color: '#1C3E48', zIndex: '0', visibility: 'hidden' }
            }
            onClick={goToHomePage}
          >
            {language === 1 ? 'Home' : 'Старт'}
          </Button>
          <Button
            variant='text'
            sx={
              loggedIn
                ? { color: '#1C3E48', zIndex: '100', visibility: 'visible' }
                : { color: '#1C3E48', zIndex: '0', visibility: 'hidden' }
            }
            onClick={goToGraphQl}
          >
            {language === 1 ? 'Main' : 'Главная'}
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '326px',
            height: '49px',
          }}
        >
          <Button
            variant={loggedIn ? 'contained' : 'outlined'}
            sx={loggedIn ? { backgroundColor: '#FE8205' } : { color: '#1C3E48' }}
            onClick={goToSignInPage}
          >
            {!loggedIn ? (language === 1 ? 'Sign in' : 'Войти') : language === 1 ? 'Sign out' : 'Выйти'}
          </Button>
          <Button
            variant='contained'
            sx={
              loggedIn
                ? { zIndex: '0', visibility: 'hidden' }
                : { backgroundColor: '#FE8205', zIndex: '100', visibility: 'visible' }
            }
            onClick={goToSignUpPage}
          >
            {language === 1 ? 'Sign up' : 'Регистрация'}
          </Button>
          <FormControl>
            <Select
              id='languages'
              variant='outlined'
              value='name'
              label='Locales'
              sx={{ color: '#1C3E48', height: '39px' }}
              onChange={handleDropdownChange}
            >
              <MenuItem value='name' sx={{ height: '25px', margin: '1px' }}>
                {language === 1 ? 'Locales' : 'Язык'}
              </MenuItem>
              <MenuItem value={1} sx={{ height: '25px', margin: '1px' }}>
                {language === 1 ? 'EN' : 'Англ'}
                <img src='/EN.png' alt='br flag' width='15px' height='10px' style={{ marginLeft: '10px' }} />
              </MenuItem>
              <MenuItem value={2} sx={{ height: '25px', margin: '1px' }}>
                {language === 1 ? 'RU' : 'Рус'}
                <img src='/RU.png' alt='ruflag' width='15px' height='10px' style={{ marginLeft: '10px' }} />
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </Container>
    </header>
  )
}

export default Header
