import React, { useState } from "react";
import "./header.css"
import "../footer/footer.css"
import { GiHamburgerMenu } from "react-icons/gi";


import DebitCard from "./DebitCard";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const logo = '/logo.png';
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
     
       
          <img src={logo}/>
         
          
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/"  smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link to="tokenomics" smooth={true} duration={500}>Tokenomics</Link>  
             
            </li>
             <li>
              <Link to="hblog" smooth={true} duration={500}>Roadmap</Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={500}>Team</Link>
            </li>
            <li>
              <Link to="faqs" smooth={true} duration={500}>FAQs</Link>
            </li>
          
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              
                <a href="https://www.instagram.com/metadogeunity/"><i className="fab fa-instagram"></i></a>
             
            </li>
            <li>
            
              
              <a href="https://twitter.com/MetaDogeUnity"><i className="fab fa-twitter"></i></a>
             
            </li>
            <li>
            
               
               
                <a href="https://discord.gg/bz5nN247pb"><i className="fab fa-discord"></i></a>
         
         
            
            </li>
            
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <DebitCard/>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;