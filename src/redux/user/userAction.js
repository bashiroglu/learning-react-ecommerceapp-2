import {userActionTypes} from './userActionTypes';

export const setCurrentUser = user => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
  };
};
/* setCurrentUser in general action function take param and do something return handable object for reducer func */
