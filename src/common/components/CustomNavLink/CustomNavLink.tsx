import { Button } from '@mui/material'
import { type FC, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  to: string
}

const CustomNavLink: FC<PropsWithChildren<Props>> = ({ to, children }) => {
  const navigate = useNavigate()

  function handleClick() {
    navigate(to)
  }

  return (
    <Button color='primary' variant='contained' onClick={handleClick}>
      {children}
    </Button>
  )
}

export default CustomNavLink
