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





function App() {
  return (
    <>
   
  <PreLoader/>
      <Header />
      <Particle/>
      
      <Hero />
      <AboutCard />
       <Hprice />
      <HAbout /> 

      <Hblog />
      <Team  /> 
      <Faq/>
    
      <Footer />
     
 
    </>
  )
}

export default App
