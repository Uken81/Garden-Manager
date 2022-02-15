// import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import nameReducer from '../features/testReducer';

const rootReducer = combineReducers({
  name: nameReducer
});

const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

const middlewareEnhancer = applyMiddleware(loggerMiddleware);

const store = createStore(rootReducer, middlewareEnhancer);

console.log(loggerMiddleware);

export default store;

// const store = configureStore({
//   reducer: rootReducer
// });

// const store = configureStore({
//   reducer: {
//     name: nameReducer
//   }
// });
