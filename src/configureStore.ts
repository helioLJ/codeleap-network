import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import { postReducer } from "./redux/post/PostSlice";
import { titleReducer } from "./redux/title/TitleSlice";
import { contentReducer } from "./redux/content/ContentSlice";
import { deletingReducer } from "./redux/deleting/DeletingSlice";
import { editingReducer } from "./redux/editing/EditingSlice";
import { userReducer } from "./redux/user/UserSlice";

const rootReducer = combineReducers({
  post: postReducer,
  title: titleReducer,
  content: contentReducer,
  deleting: deletingReducer,
  editing: editingReducer,
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['post', 'user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureAppStore() {
  const persistingStore = configureStore({
    reducer: persistedReducer,
  });
  const persistor = persistStore(persistingStore);
  
  return { persistingStore, persistor };
}
