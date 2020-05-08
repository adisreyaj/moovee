/*
 * File: Header.js
 * Project: my-first-app
 * File Created: Friday, 8th May 2020 8:07:40 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 9th May 2020 12:38:35 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">Moovee</div>
        <nav className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>GitHub</li>
          </ul>
        </nav>
        <button className="icon-primary mobile-menu-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"
              fill="rgba(255,245,245,1)"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
