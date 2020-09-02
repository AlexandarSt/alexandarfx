import React, {useEffect, useState} from 'react'
import {createStructuredSelector} from 'reselect'; 
import {selectPedalsForPreview} from '../../redux/shop/shop.selectors'
// import {bassPedals, guitarPedals} from '../../redux/shop/shop.actions'
import {filterByGuitar, filterByBass} from '../../redux/filters/filter.actions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import PedalFilter from '../pedal-filter/pedal-filter.component'
import PedalGallery from '../pedal-gallery/pedal-gallery.component'

import './products.styles.scss'
import GUITAR_PEDAL_DATA from '../../redux/shop/guitar-pedals.data';
import BASS_PEDAL_DATA from '../../redux/shop/bass-pedals.data';

const Products = ({pedals, filterByGuitar, filterByBass}) => {

    const [instrument, setInstrument] = useState(GUITAR_PEDAL_DATA)

    useEffect(() => {
        filterByGuitar()
    }, [])

    console.log(pedals)
    return (
        <div className='products'>
            <div className='category-filter'>
            <p>Categories</p>
                <ul>
                    <li>
                        <div className='guitar-type'>
                            <Link to='#' onClick={() => {
                                filterByGuitar()
                                setInstrument(GUITAR_PEDAL_DATA)
                                }}>
                                Guitar Pedals
                                <i className="fas fa-angle-right arrow"></i>
                            </Link>
                            
                        </div>
                    </li>
                    <li>
                        <div className='guitar-type'>
                            <Link to='#' onClick={() => {
                                filterByBass()
                                setInstrument(BASS_PEDAL_DATA)
                                }}>
                                Bass Pedals
                                <i className="fas fa-angle-right arrow"></i>
                            </Link>
                            
                        </div>
                    </li>
                </ul>
            </div>
            <div className='pedals'>
                <div className='filter'>
                    <p>Guitar pedals</p>
                    <div className='pedal-filters'>
                        <PedalFilter instrument={instrument} />     
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

const mapDispatchToProps = dispatch => ({
    filterByGuitar: () => dispatch(filterByGuitar()),
    filterByBass: () => dispatch(filterByBass())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
