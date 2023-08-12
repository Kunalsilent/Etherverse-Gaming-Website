import React from "react"
import "./courses.css"
import { gamemodes } from "../../dummydata"
import Heading from "../common/heading/Heading"


const GameModes = () => {
  return (
    <>
   
      <section className='online'> 
        <div className='container'>
          <Heading subtitle='Game' title='Game Modes' />
          <div className='content grid'>
            {gamemodes.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
             
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GameModes
