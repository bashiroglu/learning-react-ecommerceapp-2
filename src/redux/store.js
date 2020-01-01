import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middlewares = [logger];
/* const middlewares = []; */
// if (process.env.NODE_ENV === 'development') {
//     middlewares.push(logger);
//   } /*  this is how we turn of the logger in deployement  */

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };
