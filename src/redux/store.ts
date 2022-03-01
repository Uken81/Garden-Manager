import gardenReducer from '../features/gardenSlice';
import areasReducer from '../features/areasSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    garden: gardenReducer,
    selectedArea: areasReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
