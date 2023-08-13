import "./App.css"
import Header from "./components/common/header/Header"
import Team from "./components/team/Team"


import Footer from "./components/common/footer/Footer"

import Faq from "./components/pricing/Faq"
import Hblog from "./components/home/Hblog"
import Hero from "./components/home/hero/Hero"
import Particle from "./components/ParticlesBackground"
import AboutCard from "./components/about/AboutCard"
import Hprice from "./components/home/Hprice"
import HAbout from "./components/home/HAbout"
import { Route, Routes } from "react-router"
import PreLoader from "./components/PreLoader"
import { Element } from 'react-scroll';
import GameModes from "./components/allcourses/GameModes"




function App() {
  return (
    <>
   
  <PreLoader/>
      <Element name="/"><Header /></Element>
      <Particle/>
      
      <Hero />
      <Element name="about"><AboutCard /></Element>
       <Hprice />
      <Element name="tokenomics"><GameModes/></Element> 
      <HAbout /> 

      <Element name="hblog"><Hblog /></Element>
      <Element name="team"><Team  /> </Element>
      <Element name="faqs"><Faq/></Element>
      {/* <Contact/> */}
      <Footer />
     
 
    </>
  )
}

export default App
