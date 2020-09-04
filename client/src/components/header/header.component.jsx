import React, {useState, useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/alexandarfx-logo.png'
// import cart from '../../assets/fx-pedal.svg'
import CartIcon from '../cart-icon/cart-icon.component'

import './header.styles.scss'

const Header = () => {

    const [top, setTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY)
            const scrolltop = window.scrollY < 1
            if (scrolltop !== true) {
                setTop(true)
            } else {
                setTop(false)
            }
        })
        
    }, [])

    return (
        <div style={{'position' : 'sticky', 'top' : '0', 'zIndex' : '999'}}>
        <div className='header'>   
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='navigation'>
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
                    </ul>
                </div>
                <div className='cart'>
                    <Link to='/checkout'>
                        {/*<img src={cart} alt='Pedalboard'/>*/}
                        <CartIcon />
                    </Link>
                </div>             
        </div>
        <div className={top ? 'slide-in' : 'slide-out'}></div>
        </div>
    )
}

export default Header
