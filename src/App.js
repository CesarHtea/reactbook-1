import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import request from 'superagent';

import Header from './components/Header';
import Post from './components/Post';
import Home from './components/Home';
import Profile from './components/Profile';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/me' component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
