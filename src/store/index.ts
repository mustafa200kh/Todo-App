import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todo from "./todos/todoSlice";
import theme from "./themes/themeSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const todoConfig = {
  key: "todo",
  storage,
};

const themeConfig = {
  key: "theme",
  storage,
};

const rootConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todo: persistReducer(todoConfig, todo),
  theme: persistReducer(themeConfig, theme),
});

const persistedReducer = persistReducer(rootConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { persistor, store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
