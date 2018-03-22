import React, { Component } from 'react';
import request from 'superagent';

import Header from './components/Header';
import Post from './components/Post';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    request
      .get('https://randomuser.me/api/?results=20')
      .then(response => {
        console.log(response)
      });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.data.map(function(p) {
          return <Post />
        })}
      </div>
    );
  }
}

export default App;
