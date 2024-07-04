import './style.css'
import RentButton from '../RentButton'
import React from 'react'

function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className='banner-content-title'>
                    <h1>Sewa Mobil di Jakarta Sekarang</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='banner-content-button'>
                    <RentButton link={'/search'} />
                </div>
            </div>
        </div>
    )
}

export default Banner