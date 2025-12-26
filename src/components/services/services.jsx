import React from 'react'
import './services.css'
import service1 from '../../assets/program-1.jpg'
import service2 from '../../assets/program-2.jpg'
import service3 from '../../assets/program-3.jpg'
import service1Icon from '../../assets/program-icon1.png'
import service2Icon from '../../assets/program-icon2.png'
import service3Icon from '../../assets/program-icon3.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service1">
            <img src={service1} alt="Website Development"/> 
            <div className="caption">
                <img src={service1Icon} alt=""/>
                <h3>Website Development</h3>
                <p>We create websites that actually work for your business. Whether it's a simple company site or a full online store, we focus on designs that look good and help you connect with customers.</p>
                <ul>
                    <li>Business and company websites</li>
                    <li>Online stores with secure payment</li>
                    <li>Technical support and updates</li>
                </ul>
            </div>
        </div>

        <div className="service1">
            <img src={service2} alt="Cloud & Database Solutions"/>
            <div className="caption">
                <img src={service2Icon} alt=""/>
                <h3>Cloud & Database Solutions</h3>
                <p>We help businesses move their data to the cloud and set up databases properly. This means you can access your information from anywhere, your system grows with your needs, and you spend less on expensive hardware.</p>
                <ul>
                    <li>Database setup and improvements</li>
                    <li>Cloud hosting and deployment</li>
                    <li>Secure data storage options</li>
                </ul>
            </div>
        </div>
        
        <div className="service1">
            <img src={service3} alt="Security & Maintenance"/> 
            <div className="caption">
                <img src={service3Icon} alt=""/>
                <h3>Security & Maintenance</h3>
                <p>Technology needs regular care to stay safe and work well. We provide the maintenance and security services that keep your systems running smoothly, so you can focus on your actual business instead of tech headaches.</p>
                <ul>
                    <li>Security reviews and improvements</li>
                    <li>Regular software updates</li>
                    <li>Data backup and recovery plans</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Services