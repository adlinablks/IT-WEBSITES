import React from 'react'
import './team.css'
import adlina from '../../assets/program-1.jpg'
import auni from '../../assets/program-2.jpg'
import insyirah from '../../assets/program-3.jpg'

const Team = () => {
  return (
    <div className='team-section' >
        <div className="member">
            <img src={adlina} alt="Adlina"/> 
            <div className="caption">
                <p>Nur Adlina Balkis Binti Muhammad Razali</p>
            </div>
        </div>

        <div className="member">
            <img src={auni} alt="Auni"/>
            <div className="caption">
                <p>Auni Amira Binti Md Fauzi</p>
            </div>
        </div>
        
        <div className="member">
            <img src={insyirah} alt="Insyirah"/> 
            <div className="caption">
                <p>Nur Insyirah Binti Mohamad Azmi</p>
            </div>
        </div>
    </div>
  )
}

export default Team