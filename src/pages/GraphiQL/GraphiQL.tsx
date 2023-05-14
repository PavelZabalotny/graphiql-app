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
  useTheme,
} from '@mui/material'

import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { RoutePaths } from '@/routes/routerPaths.ts'
import { useAppSelector } from '@/store/hooks.ts'

import type React from 'react'

const GraphiQl = () => {
  const navigate = useNavigate()
  const isUserLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  const [request, setRequest] = useState('')
  const [variables, setVariables] = useState('')
  const [response] = useState('')
  const theme = useTheme()

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate(RoutePaths.Home)
    }
  }, [isUserLoggedIn, navigate])

  function onChangeRequest(event: React.ChangeEvent<HTMLInputElement>) {
    setRequest(event.target.value)
  }

  function onChangeVariables(event: React.ChangeEvent<HTMLInputElement>) {
    setVariables(event.target.value)
  }

  function handleSendRequest() {
    // TODO: implement fetch
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
            [theme.breakpoints.down('sm')]: {
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
              [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: 'initial',
              },
            }}
          >
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography>Request section</Typography>
              <Tooltip title='Execure query' placement='top'>
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
              minRows={3}
              maxRows='20'
              margin='dense'
              value={request}
              sx={{
                overflowY: 'auto',
              }}
              onChange={onChangeRequest}
            />
            <Box margin='5px 0 10px 0'>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDown />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>Variables</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField fullWidth={true} multiline margin='dense' value={variables} onChange={onChangeVariables} />
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDown />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>Header</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body2'>Sorry, the Header section is not working!</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box
            sx={{
              width: '50%',
              padding: '20px',
              [theme.breakpoints.down('sm')]: {
                width: '100%',
              },
            }}
          >
            <Typography marginTop='5px'>Response section</Typography>
            <Box marginTop={3}>{response}</Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default GraphiQl
