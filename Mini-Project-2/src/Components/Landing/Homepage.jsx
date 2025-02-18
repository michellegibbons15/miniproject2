import React from 'react'
import "../../Styles/Landing/Homepage.css"

const Homepage = () => (
    <div className="homepage">
      <p className="blurb">Are you tired of browsing multiple websites for facility info?</p>
      <p className="blurb">PlayRVA is your one-stop shop for all things sports facilities!</p>
      <p className="blurb">Log in or Sign up now!</p>
      <div className="button">
        <button
          className="btn"
          onClick={() => (window.location.href = "//michellegibbons15.github.io/miniproject1/login/index.html")}
        >
          Log in / Sign up
        </button>
      </div>
    </div>
  );
  
  export default Homepage;