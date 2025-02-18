import React from 'react'
import "../../Styles/Dashboard/Welcome.css"
// import soccerImg from "../../assets/soccer.jpg"

const Welcome = () => {
  return (
    <div className="Welcome">
      {/* <img src={soccerImg} alt="Michelle" class="profile"/> */}
        <div class="welcome-bar">
          <h1>Welcome back, Michelle!</h1>
          <h4><i class="fa-solid fa-bell"></i>Notifications</h4>
        </div>
    </div>
  )
}

export default Welcome
