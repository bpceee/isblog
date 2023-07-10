import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/"> Home </Link>
    <Link href="/about"> About </Link>
  </nav>
);
