import { Box, Button, Container, Typography, useTheme } from '@mui/material'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { type Card, cards } from './data/cards'

import { BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_SM } from '@/common/constants'
import { RoutePaths } from '@/routes/routerPaths.ts'

import { useAppSelector } from '@/store/hooks.ts'

import type { RootState } from '@/store/store.ts'

const Welcome = () => {
  const navigate = useNavigate()
  const loggedIn = useAppSelector((state: RootState) => state.user.isLoggedIn)
  const translations = useSelector((state: RootState) => state.localization.translations)
  const language = useSelector((state: RootState) => state.localization.language)
  const theme = useTheme()

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
          <Box
            sx={{
              display: 'flex',
              padding: '3rem 0',
              flexDirection: 'column',
              color: '#fff',
              [theme.breakpoints.down(BREAKPOINT_LG)]: {
                alignItems: 'center',
              },
            }}
          >
            <Typography
              variant='h5'
              sx={{
                marginBottom: 2,
                textAlign: 'center',
                [theme.breakpoints.down(BREAKPOINT_LG)]: {
                  padding: '1rem',
                },
              }}
            >
              {translations.welcomeH11} <br />
              {translations.welcomeH12}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                [theme.breakpoints.down(BREAKPOINT_LG)]: {
                  flexDirection: 'column-reverse',
                },
              }}
            >
              <Box
                className='text-button'
                sx={{
                  [theme.breakpoints.down(BREAKPOINT_SM)]: {
                    textAlign: 'center',
                  },
                }}
              >
                <Typography
                  sx={{
                    maxWidth: '300px',
                    padding: '1rem',
                    [theme.breakpoints.down(BREAKPOINT_LG)]: {
                      maxWidth: '400px',
                      textAlign: 'center',
                    },
                  }}
                >
                  {translations.description}
                </Typography>
              </Box>
              <Box
                className='monitor-image'
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  [theme.breakpoints.down(BREAKPOINT_LG)]: {
                    textAlign: 'center',
                  },
                }}
                onClick={goToGraphQl}
              >
                <Box
                  component='img'
                  src='/Monitor.png'
                  sx={{
                    maxHeight: '225px',
                    maxWidth: '358px',
                    [theme.breakpoints.down(BREAKPOINT_SM)]: {
                      maxHeight: '180px',
                      maxWidth: '286px',
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#FE8205',
                  marginTop: 2,
                }}
                onClick={goToGraphQl}
              >
                {translations.learnMore}
              </Button>
            </Box>
          </Box>
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
            <Box
              className='cards'
              sx={{
                color: '#000',
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '3%',
                height: 'fit-content',
                minWidth: '100%',
                [theme.breakpoints.down(BREAKPOINT_LG)]: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 0,
                  gap: 4,
                },
              }}
            >
              {developers.map(({ id, name, photo, technologies, github, location, position }) => (
                <Box
                  key={id}
                  className='card'
                  onClick={() => window.open(`${github}`, '_blank')}
                  sx={{
                    width: '300px',
                    height: '380px',
                    borderRadius: '10px',
                    padding: 4,
                    backgroundColor: id !== 1 ? '#fff' : '#1C3E48',
                    marginTop: id !== 1 ? '3%' : '0',
                    marginBottom: id !== 1 ? '0' : '3%',
                    cursor: 'pointer',
                    textAlign: 'center',
                    [theme.breakpoints.down(BREAKPOINT_LG)]: {
                      margin: 0,
                    },
                  }}
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      margin: '0 auto',
                    }}
                  >
                    <img
                      src={`${photo}`}
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
                  <h2 style={{ marginBlockEnd: '0', color: id !== 1 ? '#101828' : '#fff' }}>{name}</h2>
                  <span style={{ color: id !== 1 ? '#6D7589' : '#fff', fontSize: '14px' }}>{location}</span>
                  <Typography variant='h6' color={id !== 1 ? '#000' : '#fff'}>
                    {position}
                  </Typography>
                  <p style={{ color: id !== 1 ? '#6D7589' : '#fff', fontSize: '16px' }}>{technologies}</p>
                </Box>
              ))}
            </Box>
          </div>
        </div>
        <div className='project-course'>
          <Box
            className='project'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '100%',
              height: 'fit-content',
              [theme.breakpoints.down(BREAKPOINT_MD)]: {
                paddingBottom: '2rem',
              },
            }}
          >
            <h2 style={{ color: '#3A4149', fontSize: '32px', marginTop: '3%', marginBottom: '5%' }}>
              {translations.project}
            </h2>
            <Box
              className='player'
              sx={{
                position: 'relative',
              }}
            >
              <Box
                className='background-block'
                sx={{
                  backgroundColor: '#FE8205',
                  borderRadius: '20px',
                  width: '800px',
                  height: '400px',
                  zIndex: 90,
                  transform: 'rotate(-7deg)',
                  [theme.breakpoints.down(BREAKPOINT_MD)]: {
                    width: '500px',
                    height: '250px',
                  },
                  [theme.breakpoints.down(BREAKPOINT_SM)]: {
                    width: '300px',
                    height: '150px',
                  },
                }}
              />
              <Box
                className='front-block'
                sx={{
                  backgroundColor: '#1C3E48',
                  borderRadius: '20px',
                  width: '800px',
                  height: '400px',
                  position: 'absolute',
                  zIndex: '100',
                  top: '0',
                  left: '0',
                  [theme.breakpoints.down(BREAKPOINT_MD)]: {
                    width: '500px',
                    height: '250px',
                  },
                  [theme.breakpoints.down(BREAKPOINT_SM)]: {
                    width: '300px',
                    height: '150px',
                  },
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
              </Box>
            </Box>
          </Box>
          <Box
            className='course'
            sx={{
              marginTop: '5%',
              paddingBottom: '3%',
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: '#F5F5F5',
              [theme.breakpoints.down(BREAKPOINT_SM)]: {
                paddingBottom: '2rem',
              },
            }}
          >
            <h2 style={{ color: '#3A4149', fontSize: '32px', marginTop: '3%', marginBottom: '5%' }}>
              {translations.course}
            </h2>
            <Box
              className='information'
              sx={{
                width: '70%',
                height: 'fit-content',
                display: 'flex',
                [theme.breakpoints.down(BREAKPOINT_MD)]: {
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <Box
                className='technologies'
                sx={{
                  minHeight: '100%',
                  width: '50%',
                  backgroundColor: '#1C3E48',
                  padding: '7%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  [theme.breakpoints.down(BREAKPOINT_SM)]: {
                    width: '100%',
                  },
                }}
              >
                <img
                  src='/tech-icons.png'
                  alt='technologies'
                  style={{ margin: '15%', width: '250px', height: '229px', cursor: 'pointer' }}
                  onClick={() => window.open('https://rs.school/react/', '_blank')}
                />
              </Box>
              <Box
                className='description'
                sx={{
                  backgroundColor: '#0198A5',
                  minHeight: '100%',
                  maxHeight: '100%',
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: '5%',
                  color: '#fff',
                  [theme.breakpoints.down(BREAKPOINT_SM)]: {
                    width: '100%',
                  },
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
              </Box>
            </Box>
          </Box>
        </div>
      </Container>
    </section>
  )
}

export default Welcome
