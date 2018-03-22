import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { info } = this.props;

    return (
      <div className='post'>
        <header className='post__header'>
          <div>
            <img className='post__image' src={ info.picture.thumbnail }/>
          </div>
          <div>
            <h3 className='post__title'>{ info.name.first } { info.name.last }</h3>
            <p><time>1 hr</time> · <i className='fa fa-globe'></i></p>
          </div>
        </header>
        <div className='post__content'>
          <p>"On Monday, having witnessed Facebook’s refusal to take any meaningful responsibility in regards to the Cambridge Analytica story, I deleted my account in disgust."</p>
        </div>
        <footer>
          <ul className='post__actions'>
            <li>
              <i className='fa fa-thumbs-o-up'></i> Like
            </li>
            <li>
              <i className='fa fa-comment-o'></i> Comment
            </li>
            <li>
              <i className='fa fa-share'></i> Share
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Post;
