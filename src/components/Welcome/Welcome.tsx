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
              marginBottom: '10%',
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
          <div
            className='team'
            style={{
              marginRight: '15%',
              marginLeft: '15%',
              marginBottom: '5%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <h2 style={{ fontSize: '32px', marginBlockStart: '0' }}>Our team</h2>
            <div
              className='cards'
              style={{
                color: '#000',
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '3%',
                height: 'fit-content',
                minWidth: '100%',
              }}
            >
              {cards.map((card: Card) => (
                <div
                  key={card.id}
                  className='card'
                  onClick={() => window.open(`${card.github}`, '_blank')}
                  style={
                    card.id !== 1
                      ? {
                          width: '300px',
                          height: '370px',
                          borderRadius: '10px',
                          padding: '3%',
                          backgroundColor: '#fff',
                          marginTop: '3%',
                          cursor: 'pointer',
                        }
                      : {
                          width: '300px',
                          height: '370px',
                          borderRadius: '10px',
                          padding: '3%',
                          backgroundColor: '#1C3E48',
                          marginBottom: '3%',
                          cursor: 'pointer',
                        }
                  }
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
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
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        border: 'solid 2px turquoise',
                      }}
                      alt='photo'
                    />
                  </div>
                  <h2
                    style={
                      card.id !== 1 ? { marginBlockEnd: '0', color: '#101828' } : { marginBlockEnd: '0', color: '#fff' }
                    }
                  >
                    {card.name}
                  </h2>
                  <span
                    style={card.id !== 1 ? { color: '#6D7589', fontSize: '14px' } : { color: '#fff', fontSize: '14px' }}
                  >
                    {card.location}
                  </span>
                  <p
                    style={card.id !== 1 ? { color: '#6D7589', fontSize: '16px' } : { color: '#fff', fontSize: '16px' }}
                  >
                    {card.technologies}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='project-course'>
          <div
            className='project'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '100%',
              height: 'fit-content',
            }}
          >
            <h2 style={{ color: '#3A4149', fontSize: '32px', marginTop: '3%', marginBottom: '5%' }}>
              About the project
            </h2>
            <div
              className='player'
              style={{
                position: 'relative',
                marginLeft: '20%',
                marginRight: '20%',
              }}
            >
              <div
                className='background-block'
                style={{
                  backgroundColor: '#FE8205',
                  borderRadius: '20px',
                  width: '800px',
                  height: '400px',
                  zIndex: 90,
                  transform: 'rotate(-7deg)',
                }}
              />
              <div
                className='front-block'
                style={{
                  backgroundColor: '#1C3E48',
                  borderRadius: '20px',
                  width: '800px',
                  height: '400px',
                  position: 'absolute',
                  zIndex: '100',
                  top: '0',
                  left: '0',
                }}
              >
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/gyDLNmxnsR4'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                  style={{ borderRadius: '20px', border: 'none' }}
                />
              </div>
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
