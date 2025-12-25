import React from 'react'
import './members.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Members = () => {
  return (
    <div className='members container'>
        <div className="members-text">
            <h1>We bringing technologies to you!</h1>
            <p>Desc nanti buat</p>
            <button className='btn'>Explore More <img src ={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Members