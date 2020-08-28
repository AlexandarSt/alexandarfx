import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectPedals = createSelector(
    [selectShop],
    shop => shop.pedals
)

export const selectPedalsForPreview = createSelector(
    [selectPedals],
    pedals => Object.keys(pedals).map(key => pedals[key])
)

export const selectPedalsCollection = pedalsUrlParam =>
createSelector(
    [selectPedals],
    pedals => pedals[pedalsUrlParam]
)

export const selectPedalItems = createSelector(
        [selectPedalsForPreview],
        pedals => pedals.map(pedals => pedals.items)
        .reduce((acc, val) => acc.concat(val), [])
    )

    
  

