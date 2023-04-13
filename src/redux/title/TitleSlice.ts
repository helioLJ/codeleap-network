import { createSlice } from "@reduxjs/toolkit";

interface TitleState {
  value: string
}

const initialState: TitleState = {
  value: ""
}

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitleValue: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setTitleValue } = titleSlice.actions
export const titleReducer = titleSlice.reducer