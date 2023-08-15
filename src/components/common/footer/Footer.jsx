import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
  
  <footer className="footer">
      <div className="container">
        <div className="footer-links">
         <h1> MetaDogeUnity </h1>
        </div>
        <div className="footer-social">
          <a href="https://discord.gg/bz5nN247pb"><i className="fab fa-discord"></i></a>
          <a href="https://twitter.com/MetaDogeUnity"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/metadogeunity/"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="foot">&copy; 2023 Your Gaming Website. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer

