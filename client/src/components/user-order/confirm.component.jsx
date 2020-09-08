import React,{ useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors.js'
import TotalsItem from '../totals-item/totals-item.component'
// import OrderItems from '../user-order/order-items.component'
import './confirm.styles.scss'



const Confirm = ({cartItems, total, nextStep, prevStep, values}) => {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])

        const handleSubmit = event => {
            event.preventDefault()
    
            const {firstName, lastName, address, city, phone, email, text} = values

            const rng = Math.floor(Math.random() * 10000000 + 1)
            
            const order = {
                firstName,
                lastName,
                address,
                city,
                phone,
                email,
                text,
                rng,
                cartItems,
                total
            }
    
            axios.post('/order/order', order)
            .then(()=>{
                console.log('Success! Data has been sent.')
            })
            .catch(()=>{
                console.log('Failure! Data has NOT been sent.')
            })
    
        }

    return (
    <div className='container'>    
        <div className='order'>   
            <div className='shipping-data'>
                <h2>Shipping Information</h2>
                <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Name</h4>
                <p>{values.firstName} {values.lastName}</p>
                <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Address</h4>
                <p>{values.address}</p>
                <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Town/City</h4>
                <p>{values.city}</p>
                <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Phone</h4>
                <p>{values.phone}</p>
                <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Email</h4>
                <p>{values.email}</p>
                <h4 style={{ borderBottom: '1px solid grey', display: 'inline'}}>Additional Instructions</h4>
                <textarea row='7' col='40' defaultValue={values.text} readOnly />
            </div>

            <div className='cart-totals'>
                <h2>Cart Totals</h2>
                <div className='cart-totals-content'> 
                    <div className='totals-header'>
                        <div className='totals-header-block'>
                            <span>Product</span>
                        </div>
                        <div className='totals-header-block'>
                            <span>Item Price</span>
                        </div>
                    </div>
                    {
                        cartItems.map(item => 
                            <TotalsItem key={item.id} items={item}/>    
                        )
                    }
                    <div className='total'>
                    <p>Total: {total}€</p>
                    </div>
                </div>
                <div className='button-container'>
                    <button onClick={prevStep}>
                        Back
                    </button>
                    <button className='place-order' id="forward" onClick={(e) =>{
                        handleSubmit(e)
                        nextStep()
                    }}>
                        Place an order
                    </button>
                </div>
                {/* <Link to='/order'><button>Proceed to order</button></Link> */}
            </div>
            
            {/* <div className='order'>
                <h2>Items</h2>
                {
                    cartItems.map(cartItem => (
                        <OrderItems key={cartItem.id} cartItem={cartItem} />
                    ))
                }
                <h2>Total: {total}€</h2>
            </div> */}
            
            {/* <div className='nav-button'> */}
            {/* <div>    
                <button onClick={prevStep}>
                    Back
                </button>
                <button id="forward" onClick={(e) =>{
                    handleSubmit(e)
                    nextStep()
                }}>
                    Send order
                </button>
            </div>    */}
        </div>
    </div> 
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Confirm)