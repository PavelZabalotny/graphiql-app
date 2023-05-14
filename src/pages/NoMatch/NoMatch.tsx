import { Button, Container, type SxProps, type Theme } from '@mui/material'

import styles from './NoMatch.module.scss'

const NoMatch = () => {
  const buttonCustomStyles: SxProps<Theme> = {
    backgroundColor: '#FE8205',
    color: '#FFFFFF',
    '&:hover': { backgroundColor: '#ff9434' },
  }

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Oh no! It looks like you&apos;ve stumbled upon the infamous Page 404 - the land of lost pages and digital
        tumbleweeds.
      </p>
      <Button href='/' variant='contained' sx={buttonCustomStyles}>
        Go to Home
      </Button>
    </Container>
  )
}

export default NoMatch
