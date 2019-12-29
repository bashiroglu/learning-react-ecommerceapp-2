import {userActionTypes} from './userTypes';

const INITIAL_STATE = {
  currentUser: null
};
/*  we update state here we check type of action and act based on that */
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
