import { lazy } from 'react'

const NoMatch = lazy(async () => await import('@/pages/NoMatch/NoMatch.tsx'))
const SignIn = lazy(async () => await import('@/pages/SignIn/SignIn.tsx'))
const SignUp = lazy(async () => await import('@/pages/SignUp/SignUp.tsx'))
const GraphiQL = lazy(async () => await import('@/pages/GraphiQL/GraphiQL.tsx'))

export { NoMatch, SignUp, SignIn, GraphiQL }
