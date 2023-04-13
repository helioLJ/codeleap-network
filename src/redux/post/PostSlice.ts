import { createSlice } from "@reduxjs/toolkit";

import uuid from "react-uuid";
import { fetchInitialData } from "../../actions/dataExample";

interface Post {
  id: string
  username: string
  title: string
  content: string
  created_datetime: string
}

const initialState: Array<Post> = []

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: (state, action) => {
      state.unshift({
        id: uuid(),
        username: action.payload.username,
        title: action.payload.newTitle,
        content: action.payload.newContent,
        created_datetime: action.payload.now
      })
    },
    deletePost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    editPost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload.editingId)
      if (index !== -1) {
        state[index].title = action.payload.newTitle
        state[index].content = action.payload.newContent
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        (action.payload).map((result: any) => state.push(result))
      })
  }
})

export const { addNewPost, deletePost, editPost } = postSlice.actions
export const postReducer = postSlice.reducer