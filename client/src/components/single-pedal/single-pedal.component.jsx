import React, {useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {selectPedalItems} from '../../redux/shop/shop.selectors'
import {addItems} from '../../redux/cart/cart.actions'
import ImageGallery from 'react-image-gallery' 


import './single-pedal.styles.scss'

const SinglePedal = ({pedals, addItems}) => {

const [amount, setAmount] = useState(1)    

const addAmount = () => {
    let newAmount = amount + 1
    setAmount(newAmount)
}

const decreaseAmount = () => {
    let newAmount
    if(amount === 1) {
        return amount;
    } else {
        newAmount = amount - 1
    }
    setAmount(newAmount)
}

const IMAGES = pedals.images.map(image => {
    return({    
    original: image,
    thumbnail: image,
    })   
})
    
    return(
    <div className='single-pedal'>
        {/* <div className='big-image'>
            <img src={pedals.imageUrl} alt='Big pedal' />
        </div> */}
        <div className='images-gallery'>    
            <ImageGallery items={IMAGES} showPlayButton={false} />
        </div>
        <div className='info-order'>
            <div className='info-details'>
                <h2>{pedals.name}</h2>
                <div className='description'>
                    <h4><i className="fas fa-angle-right arrow" aria-hidden="true"></i>Description</h4>
                    <div dangerouslySetInnerHTML={{ __html: pedals.description }} />
                </div>
                <div className='videos'>
                    <h4><i className="fas fa-angle-right arrow" aria-hidden="true"></i>Videos</h4>
                    <div dangerouslySetInnerHTML={{ __html: pedals.video }} />
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
                            <button onClick={decreaseAmount}>-</button>
                            <input type='text' name='quantity' value={amount} readOnly></input>
                            <button onClick={addAmount}>+</button>
                        </div>
                        <button onClick={() => addItems({...pedals, amount})}>Add to rig</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

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

const mapDispatchToProps = dispatch => ({
    addItems: item => dispatch(addItems(item))
})
    


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePedal))