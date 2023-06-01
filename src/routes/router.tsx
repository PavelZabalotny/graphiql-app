import { createBrowserRouter } from 'react-router-dom'

import Welcome from '@/components/Welcome/Welcome.tsx'
import RootLayout from '@/pages/RootLayout/RootLayout.tsx'
import { GraphiQL, NoMatch, SignIn, SignUp } from '@/routes/lazyPages.ts'
import { RoutePaths } from '@/routes/routerPaths.ts'

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
        element: <SignIn />,
      },
      {
        path: RoutePaths.SignUp,
        element: <SignUp />,
      },
      {
        path: RoutePaths.GraphiQL,
        element: <GraphiQL />,
      },
      {
        path: RoutePaths.NoMatch,
        element: <NoMatch />,
      },
    ],
  },
])
