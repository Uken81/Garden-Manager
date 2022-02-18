import gardenReducer from '../features/gardenSlice';
import { configureStore } from '@reduxjs/toolkit';
// import areaReducer from '../features/areaReducer';

const store = configureStore({
  reducer: {
    // area: areaReducer,
    garden: gardenReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
