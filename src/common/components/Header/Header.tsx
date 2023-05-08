import { Container, Button, Select, MenuItem, FormControl } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.module.scss'

const Header = () => {
  const [language, setLanguage] = useState(1)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleDropdownChange = (value: number) => {
    setLanguage(value)
  }

  const handleLogIn = (state: boolean) => {
    setLoggedIn(state)
  }

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToSignInPage = () => {
    navigate('/signin')
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
          <Button variant='text' sx={{ color: '#1C3E48' }} onClick={goToHomePage}>
            Home
          </Button>
          <Button variant='text' sx={{ color: '#1C3E48' }} onClick={goToGraphQl}>
            Main
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
          <Button variant='outlined' sx={{ color: '#1C3E48' }} onClick={goToSignInPage} >
            Sign in
          </Button>
          <Button variant='contained' sx={{ backgroundColor: '#FE8205' }} onClick={goToSignUpPage}>
            Sign up
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
              <MenuItem value='name'>Locales</MenuItem>
              <MenuItem value={1}>
                EN
                <img src='/EN.png' alt='br flag' width='22px' height='15px' style={{ marginLeft: '10px' }} />
              </MenuItem>
              <MenuItem value={2}>
                RU
                <img src='/RU.png' alt='ruflag' width='22px' height='15px' style={{ marginLeft: '10px' }} />
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </Container>
    </header>
  )
}

export default Header
