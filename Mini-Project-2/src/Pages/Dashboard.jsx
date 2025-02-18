import React from 'react'
import Header from "../Components/header"
import Welcome from '../Components/Dashboard/Welcome'
import MainContent from '../Components/Dashboard/MainContent'
import Recommendations from '../Components/Dashboard/Recommendations'
import Calendar from '../Components/Dashboard/Calendar'


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header/>
      <MainContent/>
     
    </div>
  )
}

export default Dashboard
