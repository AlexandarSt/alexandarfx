import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

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
                <div className='pedal-filter'>
                    Filter pedala
                </div>
                <div className='gallery'>
                    Galerija sa slikama

                    <div className='test'>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({pedals}) => ({
    pedals
})

export default connect(mapStateToProps)(Products)
