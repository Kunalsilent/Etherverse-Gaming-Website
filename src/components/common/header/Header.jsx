import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

import DebitCard from "./DebitCard"








const Header = () => {
  const [click, setClick] = useState(false)


  

  return (
    <>
      <Head />
      <header className="fix"> 
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='hero'>About</Link>
            </li>
         
            <li>
              <Link to='tokenomics'>Tokenomics</Link>
            </li>
            <li>
              <Link to='Hblog'>Timeline</Link>
            </li>
            <li>
              <Link to='Team'>Team</Link>
            </li>
            <li>
              <Link to='/faqs'>FAQs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
   
         
       
        
        
        
      
      
        </nav>  
        
      </header>
    <DebitCard/>
    
    </>
  )
}

export default Header
