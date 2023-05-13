import { Container } from '@mui/material'

import Login from '@/components/Login/Login.tsx'

const SignUp = () => {
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Login isLogin={false} />
    </Container>
  )
}

export default SignUp
