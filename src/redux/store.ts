import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import news from './slices/all-news';
const reducer = combineReducers({
  news,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch