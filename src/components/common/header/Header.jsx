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
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/staking'>Staking</Link>
            </li>
            <li>
              <Link to='/tokenomics'>Tokenomics</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/roadmap'>Roadmap</Link>
            </li>
            <li>
              <Link to='/faqs'>FAQs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>Connect Wallet</div>
          </div>
      
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
        
      </header>
    <DebitCard/>
    </>
  )
}

export default Header
