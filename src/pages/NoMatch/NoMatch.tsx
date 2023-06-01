import { Container } from '@mui/material'

import { useSelector } from 'react-redux'

import styles from './NoMatch.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'
import { RoutePaths } from '@/routes/routerPaths.ts'

import type { RootState } from '@/store/store.ts'

const NoMatch = () => {
  const translations = useSelector((state: RootState) => state.localization.translations)

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>{translations.nomatch}</p>
      <CustomNavLink to={RoutePaths.Home} variant='contained' color='warning'>
        {translations.gohome}
      </CustomNavLink>
    </Container>
  )
}

export default NoMatch
