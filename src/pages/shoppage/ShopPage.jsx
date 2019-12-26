import React, { Component } from 'react';
import ShopData from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // we get data from shopdata file and bring here to assign to collections
      collections: ShopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
          {/* we map collections here and, create collection preview comp for each,
          send prop to child comp as other props, we only use ids of collections array as a key,
         */}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
