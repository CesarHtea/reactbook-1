import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className='grid grid--justify header'>
        <div className='grid'>
          <img className='header__image' src='https://10s7rk1sjlds1cylpm4fav81-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/480px-Facebook_icon_2013.svg_.png' />
          <form>
            <div className='form'>
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
