import { Container, Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { cards, type Card } from './data/cards'

import styles from './Welcome.module.scss'

const Welcome = () => {
  const navigate = useNavigate()

  const goToGraphQl = () => {
    navigate('/graphiql')
  }

  return (
    <main className={styles.Welcome}>
      <Container
        sx={{
          height: 'fit-content',
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          padding: '0px !important',
        }}
      >
        <div
          style={{
            minHeight: 'fit-content',
            minWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0198a5',
          }}
        >
          <div
            style={{
              display: 'flex',
              marginTop: '7%',
              marginLeft: '25%',
              marginRight: '25%',
              marginBottom: '20%',
              flexDirection: 'column',
              color: '#fff',
            }}
          >
            <h1>
              GraphiQL - Your Online Assistant <br />
              for Learning and Testing GraphQL APIs
            </h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div className='text-button'>
                <p style={{ marginRight: '15%', textAlign: 'justify', marginBlockStart: '0' }}>
                  Explore, build, and test your GraphQL queries in a user-friendly environment. Enhance your API
                  development experience with our powerful and interactive GraphiQL tool.
                </p>
                <Button variant='contained' sx={{ backgroundColor: '#FE8205', marginTop: '8%' }} onClick={goToGraphQl}>
                  Learn more
                </Button>
              </div>
              <div className='monitor-image' style={{ position: 'relative', cursor: 'pointer' }} onClick={goToGraphQl}>
                <img src='/Monitor.png' style={{ maxHeight: '225px', maxWidth: '358px' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '8%',
                    left: '5%',
                    maxHeight: '140px',
                    maxWidth: '290px',
                  }}
                >
                  <img
                    src='/screen.png'
                    id='screen'
                    style={{
                      maxHeight: '140px',
                      maxWidth: '290px',
                    }}
                  />
                </div>
              </div>
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
    </main>
  )
}

export default Welcome
