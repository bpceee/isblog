import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import About from './About';
import Navbar from './Navbar';
import Post from './Post';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div className="blog-app">
        <Navbar/>
        <div className="main">
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
