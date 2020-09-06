import React from 'react'
import About from '../../components/about/about.component'
import logo from '../../assets/aca-logo-test.png'

import './about-page.styles.scss'

const AboutPage = () => {
    return (
        <div className='about'>
            <div className='intro'>
                <h1>Our story</h1>
                <img src={logo} alt='Logo' />
            </div>
            <About />
        </div>
    )
}

export default AboutPage
