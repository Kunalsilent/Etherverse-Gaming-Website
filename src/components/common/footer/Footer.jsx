import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
  
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Etherverse</h1>
            <span>Gaming</span>
            <p>My gaming skills are unmatched..</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Etherverse
        </p>
      </div>
    </>
  )
}

export default Footer

