import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className='post'>
        <header className='post__header'>
          <div>
            <img src='https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-1/p100x100/26904508_10156429668511323_5866309676974531495_n.png?oh=0860b50dc03a86826bc8c2b0d4af61c7&oe=5B28EA9A'/>
          </div>
          <div>
            <h3 className='post__title'>The Guardian</h3>
            <p><time>1 hr</time> · <i className='fa fa-globe'></i></p>
          </div>
        </header>
      </div>
    );
  }
}

export default Post;