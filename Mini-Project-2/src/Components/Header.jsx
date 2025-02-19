import React from 'react'
import logo from "../assets/logo-png3.png"
import "../Styles/Header.css"
import {NavLink} from 'react-router-dom'

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
        <NavLink to="/explore">Explore</NavLink> 
        <NavLink to="/leagues">Leagues</NavLink> 
        <NavLink to="/community">Community</NavLink> 
        <div className="profile-icon">
          <i className="fa-regular fa-user"></i>
        </div>
      </nav>
    </header>
  );
  
  export default Header;
