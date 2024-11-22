import { ErrorOutline } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Snackbar, Typography } from '@mui/material'
import { type SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Footer from '@/common/components/Footer/Footer.tsx'
import Header from '@/common/components/Header/Header.tsx'
import Main from '@/common/components/Main/Main.tsx'
import { setError } from '@/reducers/errorSlice'
import { type RootState } from '@/store/store'

const RootLayout = () => {
  const { errorMessage } = useSelector((state: RootState) => state.apiError)
  const [openError, setOpenError] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      setOpenError(true)
    }
  }, [dispatch, errorMessage])

  const handleClose = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenError(false)
    setTimeout(() => {
      dispatch(setError(''))
    }, 200)
  }

  const ErrorMessage = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#d32f2f',
        padding: '6px 16px',
        borderRadius: 1,
        color: '#fff',
      }}
    >
      <ErrorOutline />
      <Typography
        sx={{
          margin: '0 14px',
          fontSize: '0.875rem',
          fontWeight: '500',
        }}
      >
        {errorMessage}
      </Typography>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </Box>
  )

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        {ErrorMessage}
      </Snackbar>
    </>
  )
}

export default RootLayout
