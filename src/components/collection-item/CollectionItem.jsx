import React from 'react';
import './collection-item.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
        {/* in here we destructure item of items array and we use data for display information */}
        {/* we don't need id here because we don't have component here, all are html elements */}
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
    </div>
  );
};

export default CollectionItem;
