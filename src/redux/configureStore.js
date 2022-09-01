import { configureStore, combineReducers } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import bookReducer from './books/books';

// to create store using configureStore

const reducer = combineReducers({
  checkStatusReducer,
  bookReducer,
});

const store = configureStore({
  reducer,
});

export default store;
