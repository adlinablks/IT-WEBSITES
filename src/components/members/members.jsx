import React from 'react'
import './members.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Members = () => {
  return (
    <div className='members container'>
        <div className="members-text">
            <h1>We bringing technologies to you!</h1>
            <p>Your trusted partner in digital solutions.</p>
            <Link to ='services' smooth ={true} offset={-120} duration={500}>
            <button className='btn'>Explore More <img src ={dark_arrow} alt="" /></button>
            </Link>
        </div>
    </div>
  )
}

export default Members