import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import { price } from "../../dummydata"
import { coursesCard2 } from "../../dummydata"



const AboutCard = () => {
  return (
    <><section className='hprice padding'>
    <Heading subtitle='' title='THE HEADING [soon]' />
    <div className='price container grid'>
    {price.map((val) => (
        <div className='items shadow'>
          <p>{val.desc}</p>
        </div>
      ))}
    </div>
    <section className='coursesCard'>
        <div className='container grid3'>
          {coursesCard2.map((val) => (

            <div className='items'>
              <h2>{val.coursesName}</h2>
              <br/>
             <li><div className='content flex'>
              <p>{val.des}</p>
              </div></li> 
              <br/>
            </div>
           
          ))}
        </div>
      </section>
  </section>
         <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='Key features' title= 'MetaDogeUnity Ecosystem' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
