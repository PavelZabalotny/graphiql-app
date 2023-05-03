import { createBrowserRouter } from 'react-router-dom'

import lazyLoadRoutes from '@/common/utils/lazyLoadRoutes.tsx'
import Welcome from '@/components/Welcome/Welcome.tsx'
import RootLayout from '@/pages/RootLayout/RootLayout.tsx'
import { RoutePaths } from '@/routes/routerPaths.ts'

const noMatch = '/src/pages/NoMatch/NoMatch.tsx'
const signIn = '/src/pages/SignIn/SignIn.tsx'
const signUp = '/src/pages/SignUp/SignUp.tsx'
const graphiQL = '/src/pages/GraphiQL/GraphiQL.tsx'

export const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: RoutePaths.SignIn,
        element: lazyLoadRoutes(signIn),
      },
      {
        path: RoutePaths.SignUp,
        element: lazyLoadRoutes(signUp),
      },
      {
        path: RoutePaths.GraphiQL,
        element: lazyLoadRoutes(graphiQL),
      },
      {
        path: RoutePaths.NoMatch,
        element: lazyLoadRoutes(noMatch),
      },
    ],
  },
])
