import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className='grid grid--justify header'>
        <div className='grid'>
          <img className='header__image' src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg' />
          <form>
            <div className='form grid'>
              <input type='text' placeholder='Search' />
              <button>
                <i className='fa fa-search'></i>
              </button>
            </div>
          </form>
        </div>
        <div>
          <ul>
            <li>
              <a href='#'>
                <img src='https://images-na.ssl-images-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY256_CR36,0,172,256_AL_.jpg' />
                Mr Robot
              </a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
