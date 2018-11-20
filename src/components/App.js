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
      </div>
    );
  }
}

export default App;
