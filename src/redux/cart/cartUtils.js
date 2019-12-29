export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    /* if there is the item in cart, we update its quantity property only */
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  /* if not we create quantity with value of 1 */
  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      quantity: 1 /* this is where we create quantity prop for first time for oll cart items */
    }
  ];
};
