import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import './pedal-gallery.styles.scss'

const PedalGallery = ({items, match, history}) => {

    return (
        <div className='pedal-gallery'>
            {   
                items.map((item) => (
                    <div key={item.id} style={{'marginBottom' : '20px'}} onClick={()=>history.push(`${match.url}${item.linkUrl}`)}>
                    {
                        // console.log(match.url)
                        console.log(item.url)
                    }
                        <Link to='#'><img src={item.imageUrl} alt='Pedal Image' /></Link>
                        <div className='pedal-info'>
                            <Link to='#'>{item.name}</Link>
                            <p>{item.price}€</p>
                        </div>
                    </div>
                ))   
            }
        </div>
    )
}

export default withRouter(PedalGallery)