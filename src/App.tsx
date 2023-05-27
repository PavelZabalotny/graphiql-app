import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import Loading from '@/common/Loading/Loading.tsx'
import { auth } from '@/firebase/firebase.ts'
import { setUserLoggedInStatus } from '@/reducers/userSlice.ts'
import { router } from '@/routes/router.tsx'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'

function App() {
  const isUserLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUserLoggedInStatus(true))
      } else {
        dispatch(setUserLoggedInStatus(false))
      }
    })

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return <>{isUserLoggedIn === null ? <Loading /> : <RouterProvider router={router} fallbackElement={<Loading />} />}</>
}

export default App
