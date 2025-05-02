import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><NavLink to="/createuser" className="navbar-link">CrateUser</NavLink></li>
          <li className="navbar-item"><NavLink to="/listuser" className="navbar-link">Listuser</NavLink></li>
          <li className="navbar-item"><NavLink to="/edituser" className="navbar-link">Edituser</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
