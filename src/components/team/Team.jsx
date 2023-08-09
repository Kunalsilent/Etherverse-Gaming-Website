import React from "react"

import TeamCard from "./TeamCard"
import "./team.css"

import "../about/about.css"





const Team = () => {
  return (
    <> 

    
      <section className='team padding'>
      <h1 className="etherteam">Team</h1>
        <div className='container grid'>
          <TeamCard />
         
        </div>
      </section>
    
    </>
  )
}

export default Team;
