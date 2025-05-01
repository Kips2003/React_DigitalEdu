import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/login">Log In</NavLink>
    </nav>
    )
}

export default NavBar