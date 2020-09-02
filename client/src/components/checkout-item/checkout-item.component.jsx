import React from 'react'
import {connect} from 'react-redux'

import './checkout-item.styles.scss'
import { removeItem, addItem, clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({items, removeItem, addItem, clearItemFromCart}) => {

    return (
        <div className='checkout-item'>
            <img src={items.imageUrl} alt='Pedal' />
            <p>{items.name}</p>
            <p>{items.quantity} x {items.price}€</p>
            <button onClick={() => addItem(items)}>+</button>
            <button onClick={() => removeItem(items)}>-</button> 
            <button onClick={() => clearItemFromCart(items)}>X</button>      
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
