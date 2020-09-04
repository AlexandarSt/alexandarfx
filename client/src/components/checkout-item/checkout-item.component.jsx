import React from 'react'
import {connect} from 'react-redux'

import './checkout-item.styles.scss'
import { removeItem, addItem, clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({items, removeItem, addItem, clearItemFromCart}) => {

    return (
        <div className='order-items'>    
            <div className='checkout-items'>
                <div className='product'>
                    <img src={items.imageUrl} alt='Pedal' />
                    <p>{items.name}</p>
                </div>
                <p>{items.price}€</p>
                <div className='quantity'>
                    <button onClick={() => addItem(items)}>+</button>
                    <p>{items.quantity}</p>
                    <button onClick={() => removeItem(items)}>-</button>
                </div> 
                <button onClick={() => clearItemFromCart(items)}>X</button>      
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
