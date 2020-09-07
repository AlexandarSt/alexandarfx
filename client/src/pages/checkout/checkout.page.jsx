import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import TotalsItem from '../../components/totals-item/totals-item.component' 

import './checkout.styles.scss'


const Checkout = ({items, total}) => {

    return (
        <div className='checkout'>
            
            <div className='shopping-cart'>
                <h2>Shopping Cart</h2>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {
                    items.map(item => 
                        <CheckoutItem key={item.id} items={item} />
                    )     
                }
            </div>
            <div className='cart-totals'>
                <h2>Cart Totals</h2>
                <div className='cart-totals-content'> 
                    <div className='totals-header'>
                        <div className='totals-header-block'>
                            <span>Product</span>
                        </div>
                        <div className='totals-header-block'>
                            <span>Price</span>
                        </div>
                    </div>
                    {
                        items.map(item => 
                            <TotalsItem key={item.id} items={item}/>    
                        )
                    }
                    <div className='total'>
                    <p>Total: {total}€</p>
                    </div>
                </div>
                <Link to='/order'><button>Proceed to order</button></Link>
            </div>
        </div>    
    )
}

const mapStateToProps = state =>({
    items: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout)
