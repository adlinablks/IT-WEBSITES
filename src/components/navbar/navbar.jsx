import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky (false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About us</li>
        <li>Team Members</li>
        <li>Media</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
