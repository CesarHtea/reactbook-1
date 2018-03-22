import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <ul className='header__actions grid v-center'>
            <li>
              <Link to='/me' className='grid v-center'>
                <img className='avatar' src='https://images-na.ssl-images-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY256_CR36,0,172,256_AL_.jpg' />
                <span>Mr Robot</span>
              </Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
