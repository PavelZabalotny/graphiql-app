import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ErrorSlice {
  errorMessage: string | null
}

const initialState: ErrorSlice = {
  errorMessage: null,
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
  },
})

export const { setError } = errorSlice.actions

export default errorSlice.reducer
