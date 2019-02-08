import React from 'react';
// import { NavLink } from "react-router-dom";
import { Link } from "gatsby";
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to={'/'}> Home </Link>
    <Link to={'/about'}> About </Link>
  </nav>  
)

export default Navbar;