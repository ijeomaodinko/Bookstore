// to add action types
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// to initial the state array
const initialState = [
  {
    id: uuidv4(),
    title: 'Piercing the Darkness',
    author: 'Frank E. Peretti',
  },
  {
    id: uuidv4(),
    title: 'Experiencing God',
    author: 'Henry T Blackaby',
  },
  {
    id: uuidv4(),
    title: 'Ell Miraclous',
    author: 'Eric Welson',
  },
];

// actions

export const addBookAction = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// the reducers
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
