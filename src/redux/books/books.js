// to add action types
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// to initial the state array
const initialState = [
  {
    title: 'Piercing the Darkness',
    author: 'Frank E. Peretti',
    id: uuidv4(),
  },
  {
    title: 'Experiencing God',
    author: 'Henry T Blackaby',
    id: uuidv4(),
  },
  {
    title: 'Ell Miraclous',
    author: 'Eric Welson',
    id: uuidv4(),
  },
];

// actions

export const addBookAction = (id, title, author) => ({
  type: ADD_BOOK,
  title,
  author,
  id,
});

export const removeBookAction = (title) => ({
  type: REMOVE_BOOK,
  title,
});

// the reducers
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        }];
    case REMOVE_BOOK:
      return state.filter((book) => book.title !== action.title);
    default:
      return state;
  }
};

export default bookReducer;
