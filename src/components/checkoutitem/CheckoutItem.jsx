import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({
  /* we do like this because we need 
  cartitem it self to remove increase count etc */ cartItem: {
    name,
    imageUrl,
    price,
    quantity
  }
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;{/* this is the x utf code */}</div>
  </div>
);

export default CheckoutItem;
