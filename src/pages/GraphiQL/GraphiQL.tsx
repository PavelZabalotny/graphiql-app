import { KeyboardArrowDown, PlayArrow } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Fab,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { type ChangeEvent, useEffect, useState, type KeyboardEvent } from 'react'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { BREAKPOINT_MD } from '@/common/constants'
import Loading from '@/common/Loading/Loading.tsx'
import { httpSendRequest } from '@/common/services/httpSendRequest.ts'
import { RoutePaths } from '@/routes/routerPaths.ts'
import { useAppSelector } from '@/store/hooks.ts'

import type { RootState } from '@/store/store.ts'

const defaultQuery = `{
  allFilms {
    films {
      title
      releaseDate
    }
  }
}
`

const GraphiQl = () => {
  const navigate = useNavigate()
  const isUserLoggedIn = useAppSelector((state: RootState) => state.user.isLoggedIn)
  const [query, setQuery] = useState(defaultQuery)
  const [variables, setVariables] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down(BREAKPOINT_MD))
  const translations = useSelector((state: RootState) => state.localization.translations)

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate(RoutePaths.Home)
    }
  }, [isUserLoggedIn, navigate])

  function onChangeRequest(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  function onChangeVariables(event: ChangeEvent<HTMLInputElement>) {
    setVariables(event.target.value)
  }

  async function sendQuery(): Promise<void> {
    setLoading(true)
    const json = await httpSendRequest(query, variables)
    setResponse(JSON.stringify(json, null, 4))
    setLoading(false)
  }

  function handleSendRequest() {
    void sendQuery()
  }

  function handleKeyPress(e: KeyboardEvent<HTMLDivElement>) {
    if (e?.key === 'Enter' && e.ctrlKey) {
      void sendQuery()
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: '#1C3E48',
        height: '100%',
        position: 'relative',
        top: '-25px',
        paddingTop: '25px',
      }}
    >
      <Container maxWidth={false} sx={{ height: 'calc(100% - 50px)' }}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            margin: '25px 0',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            [theme.breakpoints.down(BREAKPOINT_MD)]: {
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '20px',
              [theme.breakpoints.down(BREAKPOINT_MD)]: {
                width: '100%',
                height: 'initial',
              },
            }}
          >
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography fontWeight='bold'>{translations.request}</Typography>
              <Tooltip title='Execute query (Ctrl-Enter)' placement='top'>
                <Fab
                  color='warning'
                  size='small'
                  onClick={() => {
                    handleSendRequest()
                  }}
                >
                  <PlayArrow fontSize='large' color='inherit' />
                </Fab>
              </Tooltip>
            </Box>
            <TextField
              fullWidth={true}
              multiline
              autoFocus
              minRows={matches ? 8 : 14}
              maxRows='18'
              margin='dense'
              value={query}
              sx={{
                overflowY: 'auto',
                '& .MuiInputBase-input': {
                  color: '#1C3E48',
                },
              }}
              onChange={onChangeRequest}
              onKeyDown={(e) => {
                handleKeyPress(e)
              }}
            />
            <Box margin='5px 0 10px 0'>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDown />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>{translations.vars}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    fullWidth={true}
                    multiline
                    margin='dense'
                    value={variables}
                    onChange={onChangeVariables}
                    sx={{
                      '& .MuiInputBase-input': {
                        color: '#1C3E48',
                      },
                    }}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDown />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>{translations.header}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body2'>{translations.headerError}</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box
            sx={{
              width: '50%',
              padding: '20px',
              [theme.breakpoints.down(BREAKPOINT_MD)]: {
                width: '100%',
              },
            }}
          >
            <Typography marginTop='5px' fontWeight='bold'>
              {translations.response}
            </Typography>
            {loading ? (
              <Loading />
            ) : (
              <Box
                sx={{
                  marginTop: 3,
                  whiteSpace: 'pre',
                  overflowY: 'auto',
                  minHeight: '300px',
                  maxHeight: '550px',
                  color: '#1C3E48',
                }}
              >
                {response}
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default GraphiQl
