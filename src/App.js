/*
 * File: App.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 4:54:07 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Backdrop from './Components/Backdrop/Backdrop';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';

const MovieDetail = lazy(() => import('./Pages/MovieDetail/MovieDetail'));

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Suspense fallback={<p>Loading..</p>}>
            <Route
              path="/details/:id"
              render={(props) => <MovieDetail {...props} />}
            />
          </Suspense>
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
