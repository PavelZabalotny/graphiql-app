import { lazy, Suspense } from 'react'

import Loading from '@/common/Loading/Loading.tsx'

const LazyLoadRoutes = (componentPath: string) => {
  const LazyElement = lazy(async () => await import(/* @vite-ignore */ componentPath))

  return (
    <Suspense fallback={<Loading />}>
      <LazyElement />
    </Suspense>
  )
}

export default LazyLoadRoutes
