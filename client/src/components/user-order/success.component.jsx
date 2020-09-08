import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearCartAll} from '../../redux/cart/cart.actions';

import './success.styles.scss'

const Success = ({clearCartAll}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
    <div className='success'>
        <h1>Success!</h1>
        <br/>
        <img src="success.png" alt="Success" />
        <br/>
        <h4>Your order has been successfully created. The package will be sent to you as soon as possible.</h4>
        <h4>Thank you for your trust!</h4>
        <br />
        <Link to='/'>
        <button onClick={() => {
            clearCartAll()
        }}>
            Back to home
        </button>
        </Link>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartAll: () => dispatch(clearCartAll())
})

export default connect(null, mapDispatchToProps)(Success);