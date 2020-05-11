/*
 * File: App.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 11th May 2020 9:19:37 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';

import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
