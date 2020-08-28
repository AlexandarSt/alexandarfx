import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/aca-logo-test.png'

import './footer.styles.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='upper-footer'>
                {/* SOCIAL MEDIA*/}
                <div className='social-icons'>
                <ul>
                    <p>Social Media</p>
                    <li>
                        <a href='https://www.facebook.com/AlexandarFx/' rel="noopener noreferrer" target='_blank'>
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/alexandarfxpedals/?hl=sr' rel="noopener noreferrer" target='_blank'>
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/user/acikast' rel="noopener noreferrer" target='_blank'>
                            <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            YouTube
                        </a>
                    </li>
                    <li>
                        <a href='mailto:office@alexandarfx.com'>
                            <i className="fa fa-envelope-square" aria-hidden="true"></i>
                            Mail
                        </a>
                    </li>
                </ul>
                </div>

                {/* LOGO */}
                <div className='logo-footer'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                {/* LEGAL */}
                <div className='legal-policies'>
                    <ul>
                        <p>Legal/Policies</p>
                        <li>
                            <a href='no-refference'>
                                Return / Refund Policy
                            </a>
                        </li>
                        <li>
                            <a href='no-refference'>
                                Payment methods
                            </a>
                        </li>
                        <li>
                            <a href='no-refference'>
                                Warranty
                            </a>
                        </li>
                        <li>
                            <a href='mailto:alexandarfx@office.com'>
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='text'>
                <p>Copyright © 2020. AlexandarFx</p>
            </div>
            
        </div>
    )
}

export default Footer





