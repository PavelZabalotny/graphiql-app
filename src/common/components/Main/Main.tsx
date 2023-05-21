import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './Main.module.scss'

import Loading from '@/common/Loading/Loading.tsx'

const Main = () => {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </main>
  )
}

export default Main
