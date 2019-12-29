import { createSelector } from 'reselect';
/* get state and give cart we can already use it is our app
others the same with a litle more funct */
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
