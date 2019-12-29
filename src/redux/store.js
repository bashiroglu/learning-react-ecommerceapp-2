import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
/* this is logger we use to log state before and after change */
const middlewares = [logger];
/* we create store function by using main reducer and option of appling middlewares */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
