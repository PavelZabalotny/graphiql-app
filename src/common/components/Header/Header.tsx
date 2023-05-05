import { AppBar, Container, Stack, Toolbar } from '@mui/material'

import styles from './Header.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <AppBar position='static' color='secondary'>
          <Toolbar>
            <Stack spacing={5} direction='row'>
              <CustomNavLink to='/'>Home</CustomNavLink>
              <CustomNavLink to='signin'>Sign in</CustomNavLink>
              <CustomNavLink to='signup'>Sign up</CustomNavLink>
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  )
}

export default Header
