import { Container, Button } from '@mui/material'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { cards, type Card } from './data/cards'

import { RoutePaths } from '../../routes/routerPaths'

import { useAppSelector } from '@/store/hooks.ts'

import type { RootState } from '@/store/store.ts'

const Welcome = () => {
  const navigate = useNavigate()
  const loggedIn = useAppSelector((state: RootState) => state.user.isLoggedIn)
  const translations = useSelector((state: RootState) => state.localization.translations)
  const language = useSelector((state: RootState) => state.localization.language)

  const goToGraphQl = () => {
    loggedIn ? navigate(RoutePaths.GraphiQL) : navigate(RoutePaths.SignIn)
  }

  const developers: Card[] = useMemo(() => cards(language), [language])

  return (
    <section>
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
              {translations.welcomeH11}
              <br />
              {translations.welcomeH12}
            </h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div className='text-button'>
                <p style={{ marginRight: '15%', textAlign: 'justify', marginBlockStart: '0' }}>
                  {translations.description}
                </p>
                <Button variant='contained' sx={{ backgroundColor: '#FE8205', marginTop: '8%' }} onClick={goToGraphQl}>
                  {translations.learnMore}
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
            <h2 style={{ fontSize: '32px', marginBlockStart: '0' }}>{translations.team}</h2>
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
              {developers.map((card: Card) => (
                <div
                  key={card.id}
                  className='card'
                  onClick={() => window.open(`${card.github}`, '_blank')}
                  style={{
                    width: '300px',
                    height: '370px',
                    borderRadius: '10px',
                    padding: '3%',
                    backgroundColor: card.id !== 1 ? '#fff' : '#1C3E48',
                    marginTop: card.id !== 1 ? '3%' : '0',
                    marginBottom: card.id !== 1 ? '0' : '3%',
                    cursor: 'pointer',
                  }}
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
                  <h2 style={{ marginBlockEnd: '0', color: card.id !== 1 ? '#101828' : '#fff' }}>{card.name}</h2>
                  <span style={{ color: card.id !== 1 ? '#6D7589' : '#fff', fontSize: '14px' }}>{card.location}</span>
                  <p style={{ color: card.id !== 1 ? '#6D7589' : '#fff', fontSize: '16px' }}>{card.technologies}</p>
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
              {translations.project}
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
          <div
            className='course'
            style={{
              marginTop: '5%',
              paddingBottom: '3%',
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: '#F5F5F5',
            }}
          >
            <h2 style={{ color: '#3A4149', fontSize: '32px', marginTop: '3%', marginBottom: '5%' }}>
              {translations.course}
            </h2>
            <div
              className='information'
              style={{
                marginLeft: '15%',
                marginRight: '15%',
                width: '70%',
                height: 'fit-content',
                display: 'flex',
              }}
            >
              <div
                className='technologies'
                style={{
                  minHeight: '100%',
                  width: '50%',
                  backgroundColor: '#1C3E48',
                  padding: '7%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src='/tech-icons.png'
                  alt='technologies'
                  style={{ margin: '15%', width: '250px', height: '229px', cursor: 'pointer' }}
                  onClick={() => window.open('https://rs.school/react/', '_blank')}
                />
              </div>
              <div
                className='description'
                style={{
                  backgroundColor: '#0198A5',
                  minHeight: '100%',
                  maxHeight: '100%',
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: '5%',
                  color: '#fff',
                }}
              >
                <h3 style={{ fontSize: '30px', marginBlockStart: '0', marginBlockEnd: '0' }}>
                  React Course <br /> &#x0028;
                  <u style={{ cursor: 'pointer' }} onClick={() => window.open('https://rs.school/react/', '_blank')}>
                    The Rolling Scopes
                  </u>
                  &#x0029;
                </h3>
                <div className='text' style={{ fontSize: '15px', textAlign: 'justify' }}>
                  <p>{translations.courseP1}</p>
                  <p>{translations.courseP2}</p>
                  <p>{translations.courseP3}</p>
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
