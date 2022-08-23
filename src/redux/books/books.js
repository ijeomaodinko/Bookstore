// to add action types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// to initial the state array
const initialState = [];

// actions

export const addBookAction = (id, title, author) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    author,
  },
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// the reducers
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addBook':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case 'removeBook':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
