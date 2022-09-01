import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

// to create store using configureStore

const store = configureStore({
  reducer: {
    bookReducer,
    checkStatusReducer,
  },
});

export default store;
