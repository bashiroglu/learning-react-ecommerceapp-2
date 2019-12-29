import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
/* root reducer combine all reducer files in one file by using combineReducers f*/
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
