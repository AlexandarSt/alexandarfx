import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {NavLink} from 'react-router-dom'

import './burger-menu.styles.scss'

const BurgerMenu = ({toggle, itemCount}) => {
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
                {   itemCount ?
                    <li>
                        <NavLink exact to='/checkout' activeClassName='active-nav'>
                            Checkout (<span> {itemCount} items </span>)
                        </NavLink>
                    </li>
                    :
                    ''
                }
            </ul>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(BurgerMenu) 
