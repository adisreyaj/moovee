/*
 * File: App.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 16th May 2020 11:51:50 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';

import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Backdrop from './Components/Backdrop/Backdrop';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
function App() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const toggleMenu = () => {
    setMenuDisplay((prevState, _) => {
      return !prevState;
    });
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header menuToggled={() => toggleMenu()} enabled={menuDisplay} />
        <Backdrop enabled={menuDisplay} />
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={MovieDetail} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
