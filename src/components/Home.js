import React, { Component } from 'react';
import request from 'superagent';

import Post from './Post';

class Home extends Component {
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
        {this.state.data.map(function(p, i) {
          return <Post key={i} info={p} />
        })}
      </div>
    );
  }
}

export default Home;
