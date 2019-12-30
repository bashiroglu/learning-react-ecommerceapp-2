import { createSelector } from 'reselect';
/* we used this objectconst COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  men: 5
};  to get along with ids, basically we didn't covert our file, 
we just checked appropriate id or name by using this object before data normalization */
/* you can check previous commits to understand */

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = (
  collectionUrlParam /* select collection use
 this function to obtain right objects list to use*/
) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
export const selectCollectionsForPreview = createSelector(
  [
    selectCollections
  ] /* it is easy to understand what 
    it does, when look at the shop data page */ /* this function kinda convert our object of 
    objects to array by removing its keys*/,
  collections => Object.keys(collections).map(key => collections[key])
);
