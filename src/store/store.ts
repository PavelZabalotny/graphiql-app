import { combineReducers, configureStore } from '@reduxjs/toolkit'

import errorReducer from '@/reducers/errorSlice'
import localizationReducer, { setLanguage } from '@/reducers/localesSlice'
import userReducer from '@/reducers/userSlice.ts'

const rootReducer = combineReducers({
  user: userReducer,
  localization: localizationReducer,
  apiError: errorReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

const initialLanguage = store.getState().localization.language

store.dispatch(setLanguage(initialLanguage))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
