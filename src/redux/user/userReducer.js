import { userActionTypes } from './userActionTypes';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (userActionTypes.SET_CURRENT_USER) {
    case action.type:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
