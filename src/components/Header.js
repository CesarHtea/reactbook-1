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
        <div></div>
      </nav>
    );
  }
}

export default Header;
