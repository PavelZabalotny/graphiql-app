import { type Breakpoint } from '@mui/material'

// pattern: minimum 8 symbols, at least one letter, one digit, one special character
export const passwordPattern =
  /^(?=.*[a-zA-Z\d])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}/

export const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const BREAKPOINT_SM: Breakpoint | number = 'sm'
export const BREAKPOINT_MD: Breakpoint | number = 'md'
export const BREAKPOINT_LG: Breakpoint | number = 'lg'
