import React from 'react'
import Navbar from './components/navbar/navbar'
import Members from './components/members/members'
import Services from './components/services/services'
import Titler from './components/title/title'
import './index.css'
import Title from './components/title/title'
import About from './components/about/about'
import Team from'./components/team/team'

const App = () => {
  return (
    <div>
      <Navbar />
      <Members/>
      <div className="container">
        <Title subtitle ='Our Serivces' title='What we offer'/>
        <Services/>
        <About/>
        <Title subtitle ='Our Member' title='Lets get to know us'/>
        <Team/>
      </div>
      
    </div>
  )
}

export default App;

