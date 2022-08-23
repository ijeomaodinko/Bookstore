// action type
const checkStatus = 'check_Status';

// to initial the state to empty array
const initialState = [];

// actions

export const checkStatusAction = () => ({
  type: checkStatus,
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
