import { AutoStories, Close, KeyboardArrowDown, PlayArrow, Undo } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  Fab,
  Link,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { getIntrospectionQuery, type IntrospectionType } from 'graphql'
import { type Maybe } from 'graphql/jsutils/Maybe'
import { type ChangeEvent, useEffect, useState, type KeyboardEvent } from 'react'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'

import { BREAKPOINT_MD } from '@/common/constants'
import Loading from '@/common/Loading/Loading.tsx'

import { httpSendRequest } from '@/common/services/httpSendRequest.ts'
import { RoutePaths } from '@/routes/routerPaths.ts'
import { useAppSelector } from '@/store/hooks.ts'

import type { RootState } from '@/store/store.ts'

import { httpIntrospectionQuery, type IntrospectionQueryResponse } from '@/common/services/httpIntrospectionQuery'

const defaultQuery = `{
  allFilms {
    films {
      title
      releaseDate
    }
  }
}
`

let schemaTypes: Maybe<IntrospectionType[]>

const GraphiQl = () => {
  const navigate = useNavigate()
  const isUserLoggedIn = useAppSelector((state: RootState) => state.user.isLoggedIn)
  const [query, setQuery] = useState(defaultQuery)
  const [variables, setVariables] = useState('')
  const [response, setResponse] = useState('')
  const [schema, setSchema] = useState<JSX.Element[]>([])
  const [showDrawer, setShowDrawer] = useState(false)
  const [isSchemaLoading, setIsSchemaLoading] = useState(false)
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

  function generateSchema(name: string) {
    let jsx: JSX.Element
    const item = schemaTypes?.filter((value) => value.name === name)[0]

    if (item) {
      if (item.kind === 'OBJECT' || item.kind === 'INTERFACE') {
        jsx = (
          <>
            <Typography variant='h6'>{item.name}</Typography>
            <Typography variant='subtitle1'>{item.description}</Typography>
            <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
              <Typography variant='body1'>Fields:</Typography>
              {item.fields.map((fieldItem) => {
                const { kind } = fieldItem.type

                return (
                  <li key={uuidv4()} style={{ marginTop: '8px' }}>
                    <Typography variant='subtitle2'>
                      {fieldItem.name}:
                      {kind === 'NON_NULL' || kind === 'LIST' ? (
                        fieldItem.type.ofType.kind === 'OBJECT' || fieldItem.type.ofType.kind === 'SCALAR' ? (
                          <>
                            {' '}
                            <Link
                              href='#'
                              onClick={(e) => {
                                generateSchema((e.target as HTMLLinkElement).innerText.trim())
                              }}
                            >
                              {fieldItem.type.ofType.name}
                            </Link>
                          </>
                        ) : null
                      ) : (
                        <>
                          {' '}
                          <Link
                            href='#'
                            onClick={(e) => {
                              generateSchema((e.target as HTMLLinkElement).innerText.trim())
                            }}
                          >
                            {fieldItem.type.name}
                          </Link>
                        </>
                      )}
                    </Typography>
                    <Typography variant='body2'>{fieldItem.description}</Typography>
                  </li>
                )
              })}
            </ul>
          </>
        )
      } else {
        jsx = (
          <>
            <Typography variant='subtitle2'>{item.name}</Typography>
            <Typography variant='body2'>{item.description}</Typography>
          </>
        )
      }
    }

    setSchema((state) => [jsx, ...state])
  }

  async function handleGetDocumentation() {
    setIsSchemaLoading(true)
    const json: IntrospectionQueryResponse | undefined = schemaTypes
      ? undefined
      : await httpIntrospectionQuery(getIntrospectionQuery())
    const types: IntrospectionType[] | undefined =
      schemaTypes ?? json?.data.__schema.types.filter((item) => item.name[0] !== '_')

    if (types) {
      schemaTypes = types
    }

    const jsonList: JSX.Element = (
      <>
        <Typography variant='h6'>Docs</Typography>
        <Typography>A GraphQL schema provides a root type for each kind of operation.</Typography>
        <Typography variant='subtitle2'>All Schema Types</Typography>
        <ul style={{ listStyle: 'none', padding: '0 10px' }}>
          {types?.map((item: IntrospectionType) => {
            const element = (
              <li key={uuidv4()}>
                <Link
                  href='#'
                  onClick={() => {
                    generateSchema(item.name)
                  }}
                >
                  {item.name}
                </Link>
              </li>
            )

            return element
          })}
        </ul>
      </>
    )

    if (!schema.length) {
      setSchema((state) => [jsonList, ...state])
    }

    toggleDrawer()
  }

  const toggleDrawer = () => {
    if (showDrawer) {
      setIsSchemaLoading(false)
    }

    setShowDrawer(!showDrawer)
  }

  const drawer = (
    <Drawer
      anchor='left'
      open={showDrawer}
      onClose={toggleDrawer}
      sx={{
        '& .MuiPaper-root': {
          padding: '10px',
          display: 'flex',
          width: '600px',
          [theme.breakpoints.down(BREAKPOINT_MD)]: {
            width: '300px',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 1,
        }}
      >
        {schema.length > 1 ? (
          <Link
            href='#'
            onClick={() => {
              setSchema((state) => state.slice(1))
            }}
          >
            <Fab color='primary' size='large'>
              <Undo fontSize='medium' color='inherit' />
            </Fab>
          </Link>
        ) : null}

        <Fab
          color='primary'
          size='large'
          onClick={() => {
            toggleDrawer()
          }}
          sx={{
            marginLeft: 'auto',
          }}
        >
          <Close fontSize='medium' color='inherit' />
        </Fab>
      </Box>
      <Box sx={{ fontSize: '0.875rem' }}>{schema[0]}</Box>
    </Drawer>
  )

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
              <Stack flexDirection='row' gap={2}>
                <Tooltip title='Show Documtation Explorer' placement='top'>
                  <Fab
                    color='primary'
                    size='large'
                    onClick={() => {
                      void handleGetDocumentation()
                    }}
                    disabled={isSchemaLoading}
                  >
                    <AutoStories fontSize='medium' color='inherit' />
                  </Fab>
                </Tooltip>
                <Tooltip title='Execute query (Ctrl-Enter)' placement='top'>
                  <Fab
                    color='warning'
                    size='large'
                    onClick={() => {
                      handleSendRequest()
                    }}
                  >
                    <PlayArrow fontSize='large' color='inherit' />
                  </Fab>
                </Tooltip>
              </Stack>
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
      {drawer}
    </Box>
  )
}

export default GraphiQl
