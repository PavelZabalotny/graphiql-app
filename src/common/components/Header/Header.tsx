import {
  AppBar,
  Button,
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  Box,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'

import { useState } from 'react'

import styles from './Header.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'
import Logo from '@/common/components/Logo/Logo.tsx'
import { BREAKPOINT_MD } from '@/common/constants'
import { logout } from '@/firebase/firebase.ts'
import { setUserLoggedInStatus } from '@/reducers/userSlice.ts'
import { RoutePaths } from '@/routes/routerPaths'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'

import type { SelectChangeEvent } from '@mui/material'

const Header = () => {
  const isUserLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  const [showDrawer, setShowDrawer] = useState(false)
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MD))

  const homeLink = <CustomNavLink to={RoutePaths.Home}>Home</CustomNavLink>

  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    alert(event.target.value)
  }

  const localization = (
    <FormControl sx={{ alignSelf: 'center' }}>
      <Select
        displayEmpty
        defaultValue='name'
        sx={{ color: '#1C3E48', height: '39px', width: 'fit-content' }}
        onChange={handleDropdownChange}
      >
        <MenuItem disabled value='name'>
          Locales
        </MenuItem>
        <MenuItem value={1}>
          EN
          <img src='/EN.png' alt='br flag' width='18px' height='12px' style={{ marginLeft: '10px' }} />
        </MenuItem>
        <MenuItem value={2}>
          RU
          <img src='/RU.png' alt='ruflag' width='18px' height='12px' style={{ marginLeft: '10px' }} />
        </MenuItem>
      </Select>
    </FormControl>
  )

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

  const headerNavigation = isUserLoggedIn ? logoutButtonsGroup : loginButtonsGroup

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

  const menu = (
    <>
      <Button
        variant='contained'
        color='warning'
        onClick={() => {
          toggleDrawer()
        }}
        sx={{
          '&.MuiButton-root': {
            marginLeft: 'auto',
          },
        }}
      >
        Menu
      </Button>
      <Drawer
        anchor='right'
        open={showDrawer}
        onClose={toggleDrawer}
        sx={{
          '& .MuiPaper-root': {
            padding: '0 80px',
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Box className={styles.menu} onClick={toggleDrawer}>
          {homeLink}
          {headerNavigation}
          {localization}
        </Box>
      </Drawer>
    </>
  )

  return (
    <AppBar className={styles.header} color='inherit' position='sticky'>
      <Container>
        <div className={styles.container}>
          <Logo />
          {matches ? (
            menu
          ) : (
            <>
              {homeLink}
              <div className={styles.button_group}>{headerNavigation}</div>
              {localization}
            </>
          )}
        </div>
      </Container>
    </AppBar>
  )
}

export default Header
