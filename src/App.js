import "./App.css"
import Header from "./components/common/header/Header"
import { Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import Team from "./components/team/Team"
import Back from "./components/common/back/Back"

import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Tokenomic from "./components/allcourses/Tokenomic"
import Faq from "./components/pricing/Faq"
import Contact from "./components/contact/Contact";
import Hblog from "./components/home/Hblog"



function App() {
  return (
    <>
 
      <Header />
     
       
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Tokenomics' element={<Tokenomic />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/faqs' element={<><Back title='FAQs' /><Faq /></>} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/roadmap' element={<><Back title='Roadmap' /><Hblog /></>} />
       


      </Routes>

      
     
      <Footer />
    </>
  )
}

export default App
