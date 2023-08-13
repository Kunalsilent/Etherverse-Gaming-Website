import React from "react"
import { team } from "../../dummydata"


const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
        
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
           
              <a href={val.inst} target="_blank" rel="noopener noreferrer"><i className='fab fa-instagram icon'></i></a>
              <a href={val.twitter}  target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>
              
         
            
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
