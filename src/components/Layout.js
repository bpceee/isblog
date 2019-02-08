import React from "react"

import styles from './Layout.module.css';
import { rhythm } from "../utils/typography"
import Navbar from './Navbar';

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `0 ${rhythm(3 / 4)}`,
        }}
      >
        <Navbar/>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <hr/>
          <small>© {new Date().getFullYear()} Ken Bi. Powered by <a href="https://github.com/bpceee/isblog" rel="noopener noreferrer" target="_blank">isBlog</a></small>
        </footer>
      </div>
    )
  }
}

export default Layout
