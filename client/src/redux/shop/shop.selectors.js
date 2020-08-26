import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.pedals
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    pedals => Object.keys(pedals).map(key => pedals[key])
)

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    pedals => pedals[collectionUrlParam]
)