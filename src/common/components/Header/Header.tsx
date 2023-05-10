import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material'

import styles from './Header.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'
import { logout } from '@/firebase/firebase.ts'
import { setUserLoggedInStatus } from '@/reducers/userSlice.ts'
import { RoutePaths } from '@/routes/routerPaths'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'

const Header = () => {
  const isUserLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  const dispatch = useAppDispatch()

  const logoutButtonsGroup = (
    <>
      <CustomNavLink to={RoutePaths.GraphiQL}>GraphiQL</CustomNavLink>
      <Button
        variant='contained'
        onClick={() => {
          logout()
          dispatch(setUserLoggedInStatus(false))
        }}
      >
        Logout
      </Button>
    </>
  )

  const loginButtonsGroup = (
    <>
      <CustomNavLink to={RoutePaths.SignIn}>Sign in</CustomNavLink>
      <CustomNavLink to={RoutePaths.SignUp}>Sign up</CustomNavLink>
    </>
  )

  return (
    <header className={styles.header}>
      <Container>
        <AppBar position='static' color='secondary'>
          <Toolbar>
            <Stack spacing={5} direction='row'>
              <CustomNavLink to={RoutePaths.Home}>Home</CustomNavLink>
              {isUserLoggedIn ? logoutButtonsGroup : loginButtonsGroup}
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  )
}

export default Header
