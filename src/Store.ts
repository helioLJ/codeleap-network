import { configureStore } from "@reduxjs/toolkit";

import { postReducer } from "./redux/post/PostSlice";
import { titleReducer } from "./redux/title/TitleSlice";
import { contentReducer } from "./redux/content/ContentSlice";
import { deletingReducer } from "./redux/deleting/DeletingSlice";
import { editingReducer } from "./redux/editing/EditingSlice";
import { userReducer } from "./redux/user/UserSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    title: titleReducer,
    content: contentReducer,
    deleting: deletingReducer,
    editing: editingReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>