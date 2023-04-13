import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  value: string
  isSigned: boolean
}

const initialState: UserState = {
  value: "",
  isSigned: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserValue: (state, action) => {
      state.value = action.payload;
    },
    toggleIsSignedValue: (state) => {
      state.isSigned = !state.isSigned;
    }
  }
})

export const { setUserValue, toggleIsSignedValue } = userSlice.actions
export const userReducer = userSlice.reducer