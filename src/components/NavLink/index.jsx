import './style.css'
import React from 'react'
import img_logo from '../../assets/logo-car-rent.png'

function NavLink() { 

    return (
        <div className="navbar-container">
            <div className='navbar-content'>
                <img src={img_logo} alt="" />
                <div className="navbar-links">
                    <a href="">Our Services</a>
                    <a href="">Why Us</a>
                    <a href="">Testimonial</a>
                    <a href="">FAQ</a>
                </div>
            </div>
        </div>
    )
}

export default NavLink
