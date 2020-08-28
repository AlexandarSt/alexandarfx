import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import './pedal-gallery.styles.scss'

const PedalGallery = ({items, match, history}) => {

    return (
        <div className='pedal-gallery'>
            {   
                items.map((item) => (
                    <div key={item.id} style={{'marginBottom' : '20px'}}>
                    {
                        // console.log(match.url)
                        console.log(match.url)
                    }
                        <Link to='#'><img src={item.imageUrl} alt='Pedal' onClick={()=>history.push(`${match.url}/${item.id}`)}/></Link>
                        <div className='pedal-info'>
                            <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
                            <p>{item.price}€</p>
                        </div>
                        <div className='category'>
                            <p>{item.category}</p>
                        </div>
                        
                    </div>
                ))   
            }
        </div>
    )
}

export default withRouter(PedalGallery)