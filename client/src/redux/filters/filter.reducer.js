import GUITAR_PEDAL_DATA from '../shop/guitar-pedals.data';
import BASS_PEDAL_DATA from '../shop/bass-pedals.data';
import FilterActionTypes from './filter.types'


const INITIAL_STATE = {
    pedals: GUITAR_PEDAL_DATA
}


const filterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FilterActionTypes.GUITAR_PEDALS_FILTERS:
            return {
                pedals: GUITAR_PEDAL_DATA
            }
        case FilterActionTypes.BASS_PEDALS_FILTERS:
            return {
                pedals: BASS_PEDAL_DATA
            }       
        default:
            return state;
    }
}

export default filterReducer;