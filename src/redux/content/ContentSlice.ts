import { createSlice } from "@reduxjs/toolkit";

interface ContentState {
  value: string
}

const initialState: ContentState = {
  value: ""
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContentValue: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setContentValue } = contentSlice.actions
export const contentReducer = contentSlice.reducer