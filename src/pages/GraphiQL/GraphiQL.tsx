import { Container } from '@mui/material'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { RoutePaths } from '@/routes/routerPaths.ts'
import { useAppSelector } from '@/store/hooks.ts'

const GraphiQl = () => {
  const navigate = useNavigate()
  const isUserLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate(RoutePaths.Home)
    }
  }, [isUserLoggedIn, navigate])

  return <Container maxWidth={false}>GraphiQL</Container>
}

export default GraphiQl
