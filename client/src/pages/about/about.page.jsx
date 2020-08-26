import React from 'react'
import About from '../../components/about/about.component'
import logo from '../../assets/aca-logo-test.png'

import './about-page.styles.scss'

const AboutPage = () => {
    return (
        <div className='about'>
            <h1>Our story</h1>
            <img src={logo} alt='Logo' />
            <hr />
            <About />
        </div>
    )
}

export default AboutPage
