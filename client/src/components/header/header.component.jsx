import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/aca-logo-test.png'
import cart from '../../assets/pedal.png'

import './header.styles.scss'

const Header = () => {
    return (
        <div className='header'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='navigation'>
                    <ul>
                        <li>
                            <NavLink exact to='/products' activeClassName='active-nav'>
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
                    </ul>
                </div>
                <div className='cart'>
                    <Link to='/cart'>
                        <img src={cart} alt='Pedalboard'/>
                    </Link>
                </div>             
        </div>
    )
}

export default Header
