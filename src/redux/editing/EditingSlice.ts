import { createSlice } from "@reduxjs/toolkit";

interface EditingState {
  editingId: string
  newTitle: string
  newContent: string
}

const initialState: EditingState = {
  editingId: "",
  newTitle: "",
  newContent: ""
}

const editingSlice = createSlice({
  name: 'editing',
  initialState,
  reducers: {
    setEditingId: (state, action) => {
      state.editingId = action.payload
    },
    setNewTitle: (state, action) => {
      state.newTitle = action.payload
    },
    setNewContent: (state, action) => {
      state.newContent = action.payload
    }
  }
})

export const { setEditingId, setNewTitle, setNewContent } = editingSlice.actions
export const editingReducer = editingSlice.reducer