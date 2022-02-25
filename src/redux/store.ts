import gardenReducer from '../features/garden/gardenSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    garden: gardenReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;