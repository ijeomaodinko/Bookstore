import axios from 'axios';
import uuid from 'react-uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; // eslint-disable-line no-console

// to add action types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const READ_BOOKS = 'bookstore/books/READ_BOOK';

// to get the url
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EHbt3DaBZgT4pqfPpOLB/books/';

// the get book action
export const getBookThunk = createAsyncThunk(READ_BOOKS, async () => {
  const response = await axios.get(`${apiUrl}`).catch((error) => { console.log(error); });
  const res = response.data;
  return Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));
});

// the add book action
export const addBookThunk = createAsyncThunk(
  ADD_BOOK,
  async (item,
    thunkAPI) => {
    const book = {
      item_id: uuid(),
      title: item.title,
      author: item.author,
      category: item.category,
    };
    await axios.post(`${apiUrl}`, book)
      .then(() => { thunkAPI.dispatch(getBookThunk()); })
      .catch((error) => { console.log(error); });
    return thunkAPI.getState().books;
  },
);

// the remove book book action asynchronous
export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, async (bookId, thunkAPI) => {
  await axios.delete(`${apiUrl}${bookId}`)
    .then(() => { thunkAPI.dispatch(getBookThunk()); })
    .catch((error) => { console.log(error); });
  return thunkAPI.getState().books;
});

// to add the slice
const storeSlice = createSlice({
  name: 'bookstore/books',
  initialState: [],
  extraReducers: {
    [getBookThunk.fulfilled]: (state, action) => action.payload,
    [addBookThunk.fulfilled]: (state, action) => action.payload,

  },
});

export default storeSlice.reducer;
