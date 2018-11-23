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
        <main className={styles.main}>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/about" component={About} />
            <Route component={()=>"Not Found :("} />
          </Switch>
        </main>
        <footer className={styles.footer}>
          <hr/>
          <small>© 2018 Ken Bi. Powered by <a href="https://github.com/bpceee/isblog" rel="noopener noreferrer" target="_blank">isBlog</a></small>
        </footer>
      </div>
    );
  }
}

export default App;
