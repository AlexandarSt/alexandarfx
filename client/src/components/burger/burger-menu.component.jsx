import React from 'react'
import {NavLink} from 'react-router-dom'

import './burger-menu.styles.scss'

const BurgerMenu = ({toggle}) => {
    return (
        <div className={`${toggle ? 'menu-show' : 'menu-hide'} burger-navigation`}>
            <ul>
                <li>
                    <NavLink to='/products' activeClassName='active-nav'>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/about' activeClassName='active-nav'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact' activeClassName='active-nav'>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/checkout' activeClassName='active-nav'>
                        Checkout (<span>NUMBER</span>)
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BurgerMenu
