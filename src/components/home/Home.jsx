import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"

import Team from "../team/Team"
import Contact from "../contact/Contact"
import Particle from "../ParticlesBackground";



import Faq from "../pricing/Faq"



const Home = () => {
  return (
    <>
    <Particle/>
      
      <Hero />
      <AboutCard />
       <Hprice />
      <HAbout /> 
      <Hblog />
      <Team  /> 
      <Faq/>
      <Contact/>
     
    </>
  )
}

export default Home
