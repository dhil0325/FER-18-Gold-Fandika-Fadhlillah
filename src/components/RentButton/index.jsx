import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const RentButton = ({ link }) => {
  return (
    <Link to={link}>
      <button className="rent-button">Mulai Sewa Mobil</button>
    </Link>
  )
}

export default RentButton
