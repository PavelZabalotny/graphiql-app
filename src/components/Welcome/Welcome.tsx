import { Container, Button } from '@mui/material'

import styles from './Welcome.module.scss'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <Container sx={{ height: 'fit-content', display: 'flex', flexDirection: 'column', backgroundColor: '#0198A5' }}>
        <div className='graph-team'>
          <div className='graphql'>
            <h1>GraphiQL - Your Online Assistant for Learning and Testing GraphQL APIs</h1>
            <p>
              Explore, build, and test your GraphQL queries in a user-friendly environment. Enhance your API development
              experience with our powerful and interactive GraphiQL tool.
            </p>
            <Button />
          </div>
          <div className='team'>
            <h2>Our team</h2>
            <div className='cards'>Dynamically x3</div>
          </div>
        </div>
        <div className='project-course'>
          <div className='project'>
            <h2>About the project</h2>
            <div className='player'>
              <div className='background-block'></div>
              <div className='front-block'></div>
            </div>
          </div>
          <div className='course'>
            <h2>About the Course</h2>
            <div className='information'>
              <div className='technologies'></div>
              <div className='description'>
                <h3>React Course &#x0028;The Rolling Scopes&#x0029; </h3>
                <div className='text'>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Welcome
