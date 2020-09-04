import React from 'react'

import './home.styles.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='parallax'></div>
            <div className='homepage-text'>
                <h2>SOUND OF ART</h2>
                <p>We develop effect pedals that address a wide array of applications and styles, 
                    honoring those that came before us while claiming a spot in what is yet-to-come by building premium and unique guitar 
                    effects, modification and improvement of existing models.</p>
                <p>Each of our pedals is hand-made, hand-painted and thoroughly inspected in Serbia so that will 
                    meet our quality level before it ships out to you.</p>
                <p>We are committed to creating well tuned circuits that allow our designs to feature the minimum number of straight-forward 
                    and responsive controls and sound great no matter how you dial them in, all the while embracing the perks technological 
                    advances bring to the user experience.</p>
                <p>Our custom shop is one-of-a-kind in the industry, offering relay clickless bypass system that is a novelty in the world 
                    of guitar and bass pedals, highest quality chips and transistors, versatile and custom artwork applications, 
                    while also carrying out multi-pedal orders according to customer’s 
                    specifications.</p>
                <p>It has now been more than 7 years since <b>Alexandar Fx</b> first steps, and we are stronger and more inspired than ever to 
                take things to the next level.</p>
                <p>For all additional information regarding the custom effects that would improve the sound of your instrument and pedalboard, 
                    you can contact me or visit my small workshop in Depotovac, Serbia.</p>
                <p>Best regards,</p>
                <p style={{'fontFamily' : 'Caveat', 'fontSize' : '25px'}}>Aleksandar</p>
            </div>
        </div>
    )
}

export default Home
