import { Container } from '@mui/material'

import styles from './NoMatch.module.scss'

import CustomNavLink from '@/common/components/CustomNavLink/CustomNavLink.tsx'
import { RoutePaths } from '@/routes/routerPaths.ts'

const NoMatch = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Oh no! It looks like you&apos;ve stumbled upon the infamous Page 404 - the land of lost pages and digital
        tumbleweeds.
      </p>
      <CustomNavLink to={RoutePaths.Home} variant='contained' color='warning'>
        Go to Home
      </CustomNavLink>
    </Container>
  )
}

export default NoMatch
