import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import request from 'superagent';

import Header from './components/Header';
import Post from './components/Post';
import Home from './components/Home';

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
        this.setState({
          data: response.body.results
        })
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
