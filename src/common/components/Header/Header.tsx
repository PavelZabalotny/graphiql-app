import { Container } from '@mui/material'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <p>Header</p>
      </Container>
    </header>
  )
}

export default Header
