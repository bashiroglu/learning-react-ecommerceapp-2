import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cartitem/CartItem';
import CustomButton from '../custombutton/CustomButton';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = state/* we pass state because selectCartItems expect state */ => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
