import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='A thrilling tale of betrayal, vengeance, and endurance. ' title= "This is the World's first #Play2Earn PVP " />
            <p>Combat game Inspired by AI-Powered #Doge. Invest and Back AI Tech Start-Ups with $QUBE Tokens on the MetaDogeUnity platform Invest</p>
            <div className='button'>
              <button className='primary-btn'>
                PLAY NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Download <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
