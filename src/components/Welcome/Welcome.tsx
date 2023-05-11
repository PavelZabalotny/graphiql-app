import { Container } from '@mui/material'

import styles from './Welcome.module.scss'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <Container>
        <div>Welcome Page</div>
      </Container>
    </section>
  )
}

export default Welcome
