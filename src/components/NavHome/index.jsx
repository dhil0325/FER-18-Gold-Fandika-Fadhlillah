import './style.css'
import React, { useState } from 'react';
import img_logo from '../../assets/logo-car-rent.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { navbarLink } from '../../utils/data'
function NavHome() { 
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
      }

    return (
        <div className="navbar-container">
            <div className='navbar-content'>
                <Link to={'/'}>
                    <img src={img_logo} alt="" />
                </Link>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                   {navbarLink.map((item, index) => (
                        <a key={index} href={'#' + item.id_name} onClick={toggleMenu}>
                        {item.title}
                        </a>
                   ))}
                </div>
                <div className='navbar-hamburger' onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </div>
            </div>
        </div>
    )
}

export default NavHome
