import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserSlice {
  isLoggedIn: boolean | null
}

const initialState: UserSlice = {
  isLoggedIn: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoggedInStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
  },
})

export const { setUserLoggedInStatus } = userSlice.actions

export default userSlice.reducer
