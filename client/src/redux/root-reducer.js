import {combineReducers} from 'redux';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)