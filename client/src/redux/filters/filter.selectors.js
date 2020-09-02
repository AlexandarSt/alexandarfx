import {createSelector} from 'reselect'

const selectShop = state => state.filter;

export const selectPedals = createSelector(
    [selectShop],
    filter => filter.pedals
)

export const selectPedalsArray = createSelector(
    [selectPedals],
    pedals => Object.keys(pedals).map(key => pedals[key])
)

export const selectPedalsTitle = createSelector(
    [selectPedalsArray],
    pedals => pedals.map(titles => titles.title) 
)