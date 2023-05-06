import { Container } from '@mui/material'

import Login from '@/components/Login/Login.tsx'

const SignIn = () => {
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Login isLogin={true} />
    </Container>
  )
}

export default SignIn
