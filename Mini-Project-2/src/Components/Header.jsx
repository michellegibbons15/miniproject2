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
        <NavLink to="/explore" style={{fontSize: '2rem'}}>Explore</NavLink> 
        <NavLink to="/leagues" style={{fontSize: '2rem'}}>Leagues</NavLink> 
        <NavLink to="/community" style={{fontSize: '2rem'}}>Community</NavLink>
        <NavLink style={{fontSize: '2rem'}}>Messages</NavLink> 
        <NavLink to="/dashboard"style={{fontSize: '2rem'}}>Profile</NavLink>
      </nav>
    </header>
  );
  
  export default Header;
