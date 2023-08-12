import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import GameModes from "./GameModes"
const Tokenomic = () => {
  return (
    <>
      <Back title='Tokinomics' />
     
      <GameModes/>
      <OnlineCourses />

    </>
  )
}

export default Tokenomic;
