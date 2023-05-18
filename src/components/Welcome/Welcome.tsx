import { Container, Button } from '@mui/material'

import { cards, type Card } from './data/cards'

import styles from './Welcome.module.scss'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <Container
        sx={{
          height: 'fit-content',
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
        }}
      >
        <div className='graph-team'>
          <div className='graphql'>
            <div className='text-button'>
              <h1>GraphiQL - Your Online Assistant for Learning and Testing GraphQL APIs</h1>
              <p>
                Explore, build, and test your GraphQL queries in a user-friendly environment. Enhance your API
                development experience with our powerful and interactive GraphiQL tool.
              </p>
              <Button />
            </div>
            <div className='monitor-image'>
              <img src='/Monitor.png' />
              <img src='/screen.png' />
            </div>
          </div>
          <div className='team'>
            <h2>Our team</h2>
            <div className='cards'>
              {cards.map((card: Card) => (
                <div key={card.id} className='card' onClick={() => window.open(`${card.github}`, '_blank')}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                    }}
                  >
                    <img
                      src={`${card.photo}`}
                      className='photo'
                      style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#fff',
                      }}
                      alt='photo'
                    />
                  </div>
                  <h2>{card.name}</h2>
                  <span>{card.location}</span>
                  <p>{card.technologies}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='project-course'>
          <div className='project'>
            <h2>About the project</h2>
            <div className='player'>
              <div className='background-block' />
              <div className='front-block' />
            </div>
          </div>
          <div className='course'>
            <h2>About the Course</h2>
            <div className='information'>
              <div className='technologies' />
              <div className='description'>
                <h3>React Course &#x0028;The Rolling Scopes&#x0029; </h3>
                <div className='text'>
                  <p />
                  <p />
                  <p />
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
