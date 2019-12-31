import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  men: 5
};

export const selectCollectionWithId = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(
      /* before data normalization we used to obtain collection by using this method */
      /* what we basically say, in collections item find the collection 
      where its id equals to value of property of collectionUrlParam in COLLECTION_ID_MAP */
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
