import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material'

import styles from './Header.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'
import { logout } from '@/firebase/firebase.ts'
import { RoutePaths } from '@/routes/routerPaths'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <AppBar position='static' color='secondary'>
          <Toolbar>
            <Stack spacing={5} direction='row'>
              <CustomNavLink to={RoutePaths.Home}>Home</CustomNavLink>
              <CustomNavLink to={RoutePaths.SignIn}>Sign in</CustomNavLink>
              <CustomNavLink to={RoutePaths.SignUp}>Sign up</CustomNavLink>
              <Button
                variant='contained'
                onClick={() => {
                  logout()
                }}
              >
                Logout
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  )
}

export default Header
