/*
 * File: Header.js
 * Project: my-first-app
 * File Created: Friday, 8th May 2020 8:07:40 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 8th May 2020 8:23:39 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from "react";
import "./Header.css";
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
      </div>
    </header>
  );
};

export default Header;
