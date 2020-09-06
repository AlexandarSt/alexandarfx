import React, {useState} from 'react'
import BurgerMenu from './burger-menu.component'

import './burger-button.styles.scss'

const BurgerButton = () => {

    const [status, setStatus] = useState(false)

    const toggleBurger = () => {
        setStatus(!status)
    }
    return (
        <div>
            <div className='burger-container' onClick={toggleBurger}>
                <i className={status ? 'open' : 'close'}></i>
                <i className={status ? 'open' : 'close'}></i>
                <i className={status ? 'open' : 'close'}></i> 
            </div>
            <BurgerMenu toggle={status}/>
        </div>
    )
}

export default BurgerButton
