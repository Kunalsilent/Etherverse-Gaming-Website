import React from "react"
import "./courses.css"
import { gamemodes } from "../../dummydata"
import Heading from "../common/heading/Heading"


const GameModes = () => {
  return (
    <>
   
      <section className='online'> 
        <div className='container'>
          <Heading subtitle='' title='Game Modes' />
          <div className='content grid'>
            {gamemodes.map((val) => (
              <div className='box'><h1>{val.courseName}</h1>
              <img src={val.cover} />
              
                            
             
             
             
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GameModes
