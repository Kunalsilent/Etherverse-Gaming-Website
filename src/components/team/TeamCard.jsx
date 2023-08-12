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
              <i className='fab fa-facebook-f icon'></i>
              <a href="https://twitter.com/ubongekanem222"  target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>
              
              <i className='fab fa-instagram icon'></i>
            
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
