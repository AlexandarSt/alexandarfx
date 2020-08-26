import React from 'react'
import {Link} from 'react-router-dom'

import './pedal-filter.styles.scss'

const PedalFilter = ({filterName}) => {

    return(
        <div className='pedal-type'>
            <Link to='#'><span>{filterName}</span></Link>
        </div>
    )
}

export default PedalFilter