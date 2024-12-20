import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  FormControl,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useState } from 'react'

import { useSelector } from 'react-redux'

import styles from './Header.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'
import Logo from '@/common/components/Logo/Logo.tsx'
import { BREAKPOINT_MD } from '@/common/constants'
import { logout } from '@/firebase/firebase.ts'

import { setLanguage } from '@/reducers/localesSlice.ts'
import { setUserLoggedInStatus } from '@/reducers/userSlice.ts'
import { RoutePaths } from '@/routes/routerPaths'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'

import { store } from '@/store/store.ts'

import type { RootState } from '@/store/store.ts'
import type { SelectChangeEvent } from '@mui/material'

const Header = () => {
  const isUserLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  const [showDrawer, setShowDrawer] = useState(false)
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MD))
  const { translations, language } = useSelector((state: RootState) => state.localization)

  const homeLink = <CustomNavLink to={RoutePaths.Home}>{translations.home}</CustomNavLink>

  const handleDropdownChange = (event: SelectChangeEvent) => {
    dispatch(setLanguage(event.target.value))
  }

  store.subscribe(() => {
    store.getState()
  })

  const localization = (
    <FormControl sx={{ alignSelf: 'center' }}>
      <Select
        displayEmpty
        value={language}
        sx={{ color: '#1C3E48', height: '39px', width: 'fit-content' }}
        onChange={handleDropdownChange}
      >
        <MenuItem disabled value='name'>
          {translations.locales}
        </MenuItem>
        <MenuItem value='en'>
          EN
          <img src='/EN.png' alt='br flag' width='18px' height='12px' style={{ marginLeft: '10px' }} />
        </MenuItem>
        <MenuItem value='ru'>
          RU
          <img src='/RU.png' alt='ruflag' width='18px' height='12px' style={{ marginLeft: '10px' }} />
        </MenuItem>
      </Select>
    </FormControl>
  )

  const logoutButtonsGroup = (
    <>
      <CustomNavLink to={RoutePaths.GraphiQL}>GraphiQL</CustomNavLink>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          [theme.breakpoints.down(BREAKPOINT_MD)]: {
            flexDirection: 'column',
          },
        }}
      >
        <Button
          variant='contained'
          color='warning'
          onClick={() => {
            logout()
            dispatch(setUserLoggedInStatus(false))
          }}
        >
          {translations.logout}
        </Button>
        {localization}
      </Box>
    </>
  )

  const loginButtonsGroup = (
    <>
      <CustomNavLink to={RoutePaths.SignIn}>{translations.signin}</CustomNavLink>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          [theme.breakpoints.down(BREAKPOINT_MD)]: {
            flexDirection: 'column',
          },
        }}
      >
        <CustomNavLink to={RoutePaths.SignUp} variant='contained' color='warning'>
          {translations.signup}
        </CustomNavLink>
        {localization}
      </Box>
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
        {translations.menu}
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
          {/* {localization} */}
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
              {/* {localization} */}
            </>
          )}
        </div>
      </Container>
    </AppBar>
  )
}

export default Header
