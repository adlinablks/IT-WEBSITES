import React from 'react'
import './services.css'
import service1 from '../../assets/program-1.png'
import service2 from '../../assets/program-2.png'
import service3 from '../../assets/program-3.png'
import service1Icon from '../../assets/program-icon-1.png'
import service2Icon from '../../assets/program-icon-2.png'
import service3Icon from '../../assets/program-icon-3.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service1">
            <img src={service1} alt=""/> 
            <div className="caption">
                <img src={service1Icon} alt=""/>
                <p>Service 1 Name</p>
            </div>
        </div>

        <div className="service1">
            <img src={service2} alt=""/>
            <div className="caption">
                <img src={service2Icon} alt=""/>
                <p>Service 2 Name</p>
            </div>
        </div>
        
        <div className="service1">
            <img src={service3} alt=""/> 
            <div className="caption">
                <img src={service3Icon} alt=""/>
                <p>Service 3 Name</p>
            </div>
        </div>
    </div>
  )
}

export default Services