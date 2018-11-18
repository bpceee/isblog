import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import PostList from './PostList';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/:id" component={Post} />
        <Route component={()=>"Not Found :("} />
      </Switch>
    );
  }
}

export default App;
