import React from 'react'
import './team.css'
import adlina from '../../assets/adlina.jpeg'
import auni from '../../assets/Auni.jpg'
import insyirah from '../../assets/insyirah.jpeg'

const Team = () => {
  return (
    <div className='team-section' >
        <div className="member">
            <img src={adlina} alt="Adlina"/> 
            <div className="caption">
                <p>Nur Adlina Balkis Binti Muhammad Razali</p>
                <ul>
                    <li>Web & Digital Solutions Developer</li>
                    <li>Design, develop, and maintain responsive websites</li>
                    <li>Implement modern UI?UX practices to enhance user experience</li>
                </ul>
            </div>
        </div>

        <div className="member">
            <img src={insyirah} alt="Insyirah"/> 
            <div className="caption">
                <p>Nur Insyirah Binti Mohamad Azmi</p>
                <ul>
                    <li>CYbersecurity & SYstems Maintenance Specialist</li>
                    <li>Implement and monitor cybersecurity measures to protect systems and data</li>
                    <li>Respond to security incidents and provide preventive solutions</li>       
                </ul>
            </div>
        </div>


        <div className="member">
            <img src={auni} alt="Auni"/>
            <div className="caption">
                <p>Auni Amira Binti Md Fauzi</p>
                <ul>
                    <li>Cloud & Database Solution Engineer</li>
                    <li>Design, develop, and manage cloud-based infrastructure and service</li>
                    <li>Implement data backup, recovery, and access control strategies</li>       
                </ul>         
            </div>
        </div>
    </div>
  )
}
export default Team