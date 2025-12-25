import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
      <li><Link to='members' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-120} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-120} duration={500}>About us</Link></li>
        <li><Link to='team-section' smooth={true} offset={-120} duration={500}>Team Members</Link></li>
        <li><Link to='media' smooth={true} offset={0} duration={500}>Media</Link></li>
        <li><Link to='contact' smooth={true} offset={-120} duration={500} className='btn'>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar