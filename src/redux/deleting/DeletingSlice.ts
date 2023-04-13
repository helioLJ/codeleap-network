import { createSlice } from "@reduxjs/toolkit";

interface DeletingState {
  deletingId: string
}

const initialState: DeletingState = {
  deletingId: ""
}

const deletingSlice = createSlice({
  name: 'deleting',
  initialState,
  reducers: {
    setDeletingId: (state, action) => {
      state.deletingId = action.payload
    }
  }
})

export const { setDeletingId } = deletingSlice.actions
export const deletingReducer = deletingSlice.reducer