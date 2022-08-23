// to add action types
const addBook = 'add_book';
const removeBook = 'remove_book';

// to initial the state array

const initialState = [];

// actions

export const addBookAction = (id, title, author) => ({
  type: addBook,
  payload: {
    id,
    title,
    author,
  },
});

export const removeBookAction = (id) => ({
  type: removeBook,
  payload: id,
});

// the reducers
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addBook':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case 'removeBook':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
