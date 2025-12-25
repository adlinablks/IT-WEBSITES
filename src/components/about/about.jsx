import React from 'react'
import './about.css'
import aboutimg from '../../assets/about.jpg'
import playicon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={aboutimg} alt='' className='aboutimg'/>
        <img
          src={playicon}
          alt=''
          className='playicon'
          onClick={() => setPlayState(true)}
        />
      </div>

      <div className="about-right">
        <h3>About Us</h3>
        <h2>Our motto...</h2>
        <p>Our description</p>
      </div>
    </div>
  )
}

export default About
