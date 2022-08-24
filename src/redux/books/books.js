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
  const remove = (sourceList, value) => {
    const index = sourceList.indexOf(value);
    if (index >= 0 && index < sourceList.length) {
      return [
        ...sourceList.slice(0, index),
        ...sourceList.slice(index + 1),
      ];
    }
    return sourceList;
  };
  const { value } = action;

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
      return remove(state, state.filter((book) => book.id === value)[0]);
    default:
      return state;
  }
};

export default bookReducer;
