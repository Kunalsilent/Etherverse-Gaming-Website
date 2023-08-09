import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const Tokenomic = () => {
  return (
    <>
      <Back title='Tokinomics' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default Tokenomic;
