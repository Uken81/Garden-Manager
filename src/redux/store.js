import { configureStore } from '@reduxjs/toolkit';
import areaReducer from '../features/areaReducer';
import { gardenReducer } from './garden';

const store = configureStore({
  reducer: {
    area: areaReducer,
    gardenObject: gardenReducer
  }
});

export default store;
