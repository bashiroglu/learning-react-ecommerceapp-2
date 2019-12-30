import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collectionpage/CollectionPage';

const ShopPage = (
  {
    match/* we have access because we use route component in our app.js */
  } /* we use this basically to say when to render CollectionsOverview
  and CollectionPage*/
) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      path={
        `${match.path}/:collectionId` /* this is the way of sending param to comp in react route */
      }
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;
