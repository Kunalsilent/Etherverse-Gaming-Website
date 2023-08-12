import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';
import './preloader.css';
const PreLoader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);

  return (
    <div className='preloader'>
 
    <div className='centre'>
    <div className=''></div>
    <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div></div>

    </div>
      
  
  )
}

export default PreLoader