import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import menuicon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  const [mobilemenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setsticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobilemenu);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img 
        src={logo} 
        alt="Logo" 
        className='logo'
        onClick={scrollToTop}
        style={{ cursor: 'pointer' }}
      />

      <ul className={mobilemenu ? '' : 'hidemobilemenu'}>
        <li><Link to='members' smooth offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth offset={-120} duration={500}>About us</Link></li>
        <li><Link to='services' smooth offset={-120} duration={500}>Services</Link></li>
        <li><Link to='team-section' smooth offset={-120} duration={500}>Team Members</Link></li>
        <li><Link to='contact' smooth offset={-120} duration={500} className='btn'>Contact us</Link></li>
      </ul>

      <img src={menuicon} alt="Menu" className='menuicon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar