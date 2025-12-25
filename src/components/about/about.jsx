import React from 'react'
import './about.css'
import aboutimg from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={aboutimg} alt='' className='aboutimg'/>
        <img src={playicon} alt='' className='playicon'/>
       
    </div>
    <div className="about-right">
        <h3>About Us</h3>
        <h2>our moto...</h2>
        <p>our desc </p>

    </div>
    </div>
  )
}

export default About