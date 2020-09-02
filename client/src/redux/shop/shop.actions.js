import ShopActionTypes from './shop.types'

export const guitarPedals = () => ({
    type: ShopActionTypes.GUITAR_PEDALS
})

export const bassPedals = () => ({
    type: ShopActionTypes.BASS_PEDALS,
})

export const filterByCategory = (instrument, item) => ({
    type: ShopActionTypes.FILTER_BY_CATEGORY,
    pedalFor: instrument,
    payload: item
})