import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink exact to={'/'}> Home </NavLink>
    <NavLink to={'/about'}> About </NavLink>
  </nav>  
)

export default Navbar;