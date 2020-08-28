import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {selectPedalItems} from '../../redux/shop/shop.selectors'

import './single-pedal.styles.scss'

const SinglePedal = ({pedals, match}) => (
    <div className='single-pedal'>
        <div className='big-image'>
            <img src={pedals.imageUrl} alt='Big pedal' />
        </div>
        <div className='images-gallery'>
            <p>Ovde idu slike</p>
        </div>
        <div className='info-order'>
            <div className='info-details'>
                <h2>{pedals.name}</h2>
                <div className='description'>
                    <h4><i className="fas fa-angle-right arrow" aria-hidden="true"></i>Description</h4>
                    <p>{pedals.description}</p>
                </div>
                <div className='videos'>
                    <h4><i className="fas fa-angle-right arrow" aria-hidden="true"></i>Videos</h4>
                    <p>Ovde idu video klipovi</p>
                </div>
                
            </div>
            <div className='order-details'>
                <div className='border'>
                    <div className='price'>
                        <h4>Price</h4>
                        <h4>{pedals.price}€</h4>
                    </div>
                    <div className='order'> 
                        <div className='quantity'>
                            <h4>Quantity</h4>
                            <button>-</button>
                            <input type='text' name='quantity' value='1' readOnly></input>
                            <button>+</button>
                        </div>
                        <button>Add to rig</button>
                    </div>
                </div>
            </div>
        </div>

        {console.log(match.params.id)}
        {console.log(pedals)}
        
    </div>
)

const mapStateToProps = (state, props) => {
    const pedals = selectPedalItems(state)
    const findPedalById = (element) => {
        return element.id == props.match.params.id
    }
    let searched = pedals.find(findPedalById)

    return ({
    pedals: searched
})
}
    


export default withRouter(connect(mapStateToProps)(SinglePedal))