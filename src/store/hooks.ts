import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { type AppDispatch, type RootState } from '@/store/store.ts'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
