import React from 'react'
import { Link } from 'react-router-dom'
import { SOCIAL_LINKS } from '../data'

const Header = () => {
    return (
        <header>
            <nav>
                <div id="nav-left">
                    <ul>
                        <li><Link to="/">WORK</Link></li>
                        <li><Link to="/About">ABOUT</Link></li>
                        <li><Link to="/Contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div id="nav-center">
                    <ul>
                        <li><Link to="/">SOURABH ARYA</Link></li>
                    </ul>
                </div>
                <div id="nav-right">
                    <ul>
                        {SOCIAL_LINKS.map(social => (
                            <li>
                                <a href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                                    <i className={social.icon}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
