import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPedalsTitle} from '../../redux/filters/filter.selectors'
import {filterByCategory} from '../../redux/shop/shop.actions'

import './pedal-filter.styles.scss'

const PedalFilter = ({filterName, filterByCategory, instrument}) => {
    return(         
        filterName.map(name =>          
            <div key={name} className='pedal-type'>
                <Link to='#' onClick={() => filterByCategory(instrument, name)}>
                    <span>{name}</span>
                </Link>
            </div>
            )  
        )
    }

const mapStateToProps = state => ({
    filterName: selectPedalsTitle(state)
})

const mapDispatchToProps = dispatch => ({
    filterByCategory: (instrument, item) => dispatch(filterByCategory(instrument, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(PedalFilter)