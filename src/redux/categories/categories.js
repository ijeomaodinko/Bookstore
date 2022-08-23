// action type
const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';

// to initial the state to empty array
const initialState = [];

// actions

export const checkStatusAction = () => ({
  type: CHECK_STATUS,
});

// to add reducer
const checkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'checkStatus':
      return 'Under Constructon';
    default:
      return state;
  }
};

export default checkStatusReducer;
