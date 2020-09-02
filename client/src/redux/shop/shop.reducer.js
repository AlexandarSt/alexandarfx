import GUITAR_PEDAL_DATA from './guitar-pedals.data';
import BASS_PEDAL_DATA from './bass-pedals.data';
import ShopActionTypes from './shop.types'
import FilterActionTypes from '../filters/filter.types'
import {filterPedalsByCategory} from './shop.utils'


const INITIAL_STATE = {
    pedals: GUITAR_PEDAL_DATA
}


const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FilterActionTypes.GUITAR_PEDALS_FILTERS:
            return {
                pedals: GUITAR_PEDAL_DATA
            }
        case FilterActionTypes.BASS_PEDALS_FILTERS:
            return {
                pedals: BASS_PEDAL_DATA
            }
        case ShopActionTypes.FILTER_BY_CATEGORY:
            return {
                ...state,
                pedals: filterPedalsByCategory(action.pedalFor, action.payload)
            }       
        default:
            return state;
    }
}

export default shopReducer;