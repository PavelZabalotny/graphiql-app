import { RouterProvider } from 'react-router-dom'

import Loading from '@/common/Loading/Loading.tsx'
import { router } from '@/routes/router.tsx'

function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />
}

export default App
