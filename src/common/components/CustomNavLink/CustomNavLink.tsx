import {
  Button,
  type ButtonPropsColorOverrides,
  type ButtonPropsVariantOverrides,
  type SxProps,
  type Theme,
} from '@mui/material'
import { type OverridableStringUnion } from '@mui/types'
import { type FC, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  to: string
  variant?: OverridableStringUnion<'text' | 'contained' | 'outlined', ButtonPropsVariantOverrides> | undefined
  color?:
    | OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides
      >
    | undefined
  className?: string
  sx?: SxProps<Theme> | undefined
}

const CustomNavLink: FC<PropsWithChildren<Props>> = ({ to, variant, color, className, sx, children }) => {
  const navigate = useNavigate()

  function handleClick() {
    navigate(to)
  }

  return (
    <Button color={color} variant={variant} onClick={handleClick} className={className} sx={sx} size='large'>
      {children}
    </Button>
  )
}

export default CustomNavLink
