import "./header.css"
import "../footer/footer.css"

import { React, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import DebitCard from "./DebitCard";
import { Link } from 'react-scroll';


 const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  const logo = '/logo.png';

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
    
    <div className={color ? "header header-bg" : "header"}>
    <div className="logo"> 
     <img src={logo}/>
   </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
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
       

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
   </div>
    </div>
    <DebitCard/>
    </>
  );

};


export default Header;