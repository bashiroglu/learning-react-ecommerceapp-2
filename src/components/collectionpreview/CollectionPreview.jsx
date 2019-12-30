import React from 'react';
import CollectionItem from '../collectionitem/CollectionItem';
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter(
            (item, idx) => idx < 4
          ) /* we can also write another 
          select funtion to get only 4 
          but we use this method
          to give chance to collectionpreview 
          to decide */
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
