import { AppBar, Button, Container } from '@mui/material'

import styles from './Header.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'
import Logo from '@/common/components/Logo/Logo.tsx'
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
        color='warning'
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
      <CustomNavLink to={RoutePaths.SignUp} variant='contained' color='warning'>
        Sign up
      </CustomNavLink>
    </>
  )

  return (
    <AppBar className={styles.header} color='inherit' position='sticky'>
      <Container>
        <div className={styles.container}>
          <Logo />
          <CustomNavLink to={RoutePaths.Home}>Home</CustomNavLink>
          <div className={styles.button_group}>{isUserLoggedIn ? logoutButtonsGroup : loginButtonsGroup}</div>
        </div>
      </Container>
    </AppBar>
  )
}

export default Header
