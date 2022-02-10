import { createStore } from 'redux';
import { gardenReducer } from './garden';

//Use combineReducers() when another reducer is created.
const rootReducer = gardenReducer;
const store = createStore(rootReducer);

export default store;
