import { createSlice } from '@reduxjs/toolkit'

import translations from '@/reducers/data/translations'

import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  language: 'en',
  translations: translations.en,
}

const localesSlice = createSlice({
  name: 'locales',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      const language = action.payload
      state.language = language
      state.translations = translations[language]
    },
  },
})

export const { setLanguage } = localesSlice.actions

export default localesSlice.reducer
