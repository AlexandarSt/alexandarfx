import GUITAR_PEDAL_DATA from './guitar-pedals.data';

const INITIAL_STATE = {
    pedals: GUITAR_PEDAL_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer;