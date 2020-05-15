/*
 * File: App.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 15th May 2020 11:42:24 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';

import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Backdrop from './Components/Backdrop/Backdrop';
function App() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const toggleMenu = () => {
    setMenuDisplay((prevState, _) => {
      return !prevState;
    });
  };
  return (
    <div className="App">
      <Header
        menuToggled={() => {
          toggleMenu();
        }}
        enabled={menuDisplay}
      />
      <Backdrop enabled={menuDisplay} />
      <Home />
    </div>
  );
}

export default App;
