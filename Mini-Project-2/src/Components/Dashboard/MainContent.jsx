import React from 'react'
import "../../Styles/Dashboard/MainContent.css"
import fieldhockeyImg from "../../assets/dashboard/FH.jpg"
import Welcome from './Welcome'
import Calendar from './Calendar'
import Recommendations from './Recommendations'

const MainContent = () => {
  return (
    <>
    <div className="picture">
      <img src={fieldhockeyImg} alt="FieldHockey"/>
    </div>
    <div className="container">
      <Welcome/>
      <Calendar/>
      <Recommendations/>
    </div>
    </>
  )
}

export default MainContent
