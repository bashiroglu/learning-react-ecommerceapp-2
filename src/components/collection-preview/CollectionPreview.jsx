import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collection-preview.scss'


const CollectionPreview = ({ title, items }) => {
  return (
      /* here we get title and items from parent prop and use title, but items is still array here, 
      it is nested array in array named collections it, you can see i shop data */
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
          {/* we loop array here and get only 4 of items, because we need only 4,
          then we take id use as a key, and send other elements of array to collection item */}
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
