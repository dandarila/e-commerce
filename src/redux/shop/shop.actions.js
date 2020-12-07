// import collectionComponent from '../../pages/collection/collection.component';
import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS, 
  payload: collectionsMap
})