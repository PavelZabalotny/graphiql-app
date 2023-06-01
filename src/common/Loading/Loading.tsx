import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress size={100} />
    </Box>
  )
}

export default Loading
