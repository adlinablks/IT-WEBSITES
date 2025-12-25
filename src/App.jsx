import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Members from './components/members/members'
import Services from './components/services/services'
import './index.css'
import Title from './components/title/title'
import About from './components/about/about'
import Team from'./components/team/team'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Media from './components/media/media'

const App = () => {

  const[playState, setPlayState] =useState(false);



  return (
    <div>
      <Navbar />
      <Members/>
      <div className="container">
        <div id='services'>
          <Title subtitle='Our Services' title='What we offer'/>
          <Services/>
        </div>
        <div id='about'>
          <About setPlayState= {setPlayState}/>
        </div>
        <div id='team-section'>
          <Title subtitle='Our Member' title='Lets get to know us'/>
          <Team/>
        </div>
        <div id='contact'>
          <Title subtitle='Contact us' title='Get in touch!'/>
          <Contact/>
        </div>
        <Footer/>
      </div>
      <Media playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App;