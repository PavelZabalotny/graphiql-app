import { configureStore, combineReducers } from '@reduxjs/toolkit'

import localizationReducer from '@/reducers/localesSlice'

import userReducer from '@/reducers/userSlice.ts'

const rootReducer = combineReducers({
  user: userReducer,
  localization: localizationReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
