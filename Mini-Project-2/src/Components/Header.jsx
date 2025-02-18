import React from 'react'
import logo from "../assets/logo-png3.png"
import "../Styles/Header.css"

const Header = () => (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="PlayRVA Logo" />
      </div>
      <nav className="nav">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <a href="#">Explore</a>
        <a href="#">Leagues</a>
        <a href="#">Community</a>
        <div className="profile-icon">
          <i className="fa-regular fa-user"></i>
        </div>
      </nav>
    </header>
  );
  
  export default Header;
