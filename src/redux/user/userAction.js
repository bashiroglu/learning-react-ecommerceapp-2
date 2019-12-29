export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  };
};
/* setCurrentUser in general action function take param and do something return handable object for reducer func */
