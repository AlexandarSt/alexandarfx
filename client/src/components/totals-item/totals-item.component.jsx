import React from 'react'

import './totals-item.styles.scss'

const TotalsItem = ({items}) => {
    return (
        <div className='totals-items'>
            <div className='total-items-info'>
                <p>{items.name}</p>
                <p>Quantity: {items.quantity}</p>
            </div>
            <div className='totals-items-price'>
                <p>{items.price}€</p>
            </div> 
        </div>
    )
}

export default TotalsItem
