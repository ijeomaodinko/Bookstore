// to add action types

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// to initial the state array

const initialState = [
  {
    id: 1,
    title: 'Piercing the Darkness',
    author: 'Frank E. Peretti',
  },
  {
    id: 2,
    title: 'Experiencing God',
    author: 'Henry T Blackaby',
  },
  {
    id: 3,
    title: 'Ell Miraclous',
    author: 'Eric Welson',
  },
];

// actions creators

export const addBookAction = (id, title, author) => ({
  type: ADD_BOOK,
  title,
  author,
  id,
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
          title: action.title,
          author: action.author,
          id: action.id,
        }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
