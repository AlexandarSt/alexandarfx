import React from 'react'
import {connect} from 'react-redux'

import {selectCartItems} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component' 

import './checkout.styles.scss'


const Checkout = ({items}) => {

    return (
        <div className='checkout'>
            {
                items.map(item => 
                    <CheckoutItem key={item.id} items={item} />
                )     
            }
        </div>
    )
}

const mapStateToProps = state =>({
    items: selectCartItems(state)
})

export default connect(mapStateToProps)(Checkout)
