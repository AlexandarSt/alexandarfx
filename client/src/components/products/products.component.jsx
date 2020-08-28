import React from 'react'
import {createStructuredSelector} from 'reselect'; 
import {selectPedalsForPreview} from '../../redux/shop/shop.selectors'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import PedalFilter from '../pedal-filter/pedal-filter.component'
import PedalGallery from '../pedal-gallery/pedal-gallery.component'

import './products.styles.scss'

const Products = ({pedals}) => {
    return (
        <div className='products'>
            <div className='category-filter'>
            <p>Categories</p>
                <ul>
                    <li>
                        <div className='guitar-type'>
                            <NavLink exact to='/products' activeClassName='active'>
                                Guitar Pedals
                                <i className="fas fa-angle-right arrow"></i>
                            </NavLink>
                            
                        </div>
                    </li>
                    <li>
                        <div className='guitar-type'>
                            <NavLink exact to='/about' activeClassName='active'>
                                Bass Pedals
                                <i className="fas fa-angle-right arrow"></i>
                            </NavLink>
                            
                        </div>
                    </li>
                </ul>
            </div>
            <div className='pedals'>
                <div className='filter'>
                    <p>Guitar pedals</p>
                    <div className='pedal-filters'>
                        {
                            pedals.map((pedal) => (
                                <PedalFilter key={pedal.id} filterName={pedal.title}/> 
                                ))
                        }
                    </div>
                </div>
                <div className='gallery'>
                    {
                        pedals.map((pedal) => (
                            <PedalGallery key={pedal.id} items={pedal.items}/>
                        ))
                    
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    pedals: selectPedalsForPreview
})

export default connect(mapStateToProps)(Products)
