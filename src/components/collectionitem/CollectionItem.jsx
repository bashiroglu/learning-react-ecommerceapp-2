import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custombutton/CustomButton';
import { addItem } from '../../redux/cart/cartActions';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        className="custom-button" /*  we cannot delete this or we need to add
         this because this comes from collection item
        scss file not from button's scss file */
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
