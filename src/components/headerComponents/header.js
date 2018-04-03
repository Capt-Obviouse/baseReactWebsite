import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
          <div classNme="logo">
            LOGO
          </div>
          <div>
            Find me in src/componeonts/headerComponents/header.js
          </div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
    );
  }
}

export default Header;
