import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <NavLink exact to={'/'}> Home </NavLink>
    <NavLink to={'/about'}> About </NavLink>
  </nav>  
)

export default Navbar;