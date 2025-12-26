import React from 'react'
import './about.css'
import aboutimg from '../../assets/about.jpg'
import playicon from '../../assets/iconplay.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={aboutimg} alt='' className='aboutimg'/>
        <img src={playicon} alt='' className='playicon' onClick={() => setPlayState(true)} />
      </div>

      <div className="about-right">
        <h3>About Us</h3>
        <div className="mission-vision">
          <div className="mission">
            <h4>Mission:</h4>
            <p>To develop simple, effective, and secure web and software solutions that meet real user needs and support business digital transformation.</p>
          </div>
          <div className="vision">
            <h4>Vision:</h4>
            <p>To become a trusted technology partner recognized for quality, innovation, and continuous improvement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About