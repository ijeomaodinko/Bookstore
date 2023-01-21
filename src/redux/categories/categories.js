// action types
const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';

// to add initial state
const initialState = [];

// to add action
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// to add reducer
const checkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default checkStatusReducer;
