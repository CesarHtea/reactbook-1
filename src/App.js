import React, { Component } from 'react';

import Header from './components/Header';
import Post from './components/Post';

import Twit from 'twit';

import config from './config';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(config)
    return (
      <div>
        <Header />
        <Post />
      </div>
    );
  }
}

export default App;
