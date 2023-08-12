import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (

            <div className='items'>
             <li><div className='content flex'></div></li> 
            
              
           
            
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
