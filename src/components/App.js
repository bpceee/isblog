import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import About from './About';
import Navbar from './Navbar';
import Post from './Post';
import PostList from './PostList';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Navbar/>
        <div className={styles.main}>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/about" component={About} />
            <Route component={()=>"Not Found :("} />
          </Switch>
        </div>
        <footer className={styles.footer}>
          <hr/>
          <small> © 2018 Ken Bi. Powered by <a href="https://github.com/bpceee/blog" rel="noopener noreferrer" target="_blank">Me</a> using the <a href="https://github.com/arjunkrishnababu96/basics" rel="noopener noreferrer" target="_blank">Basics</a> theme. </small>
        </footer>
      </div>
    );
  }
}

export default App;
