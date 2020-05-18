/*
 * File: App.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Monday, 18th May 2020 11:43:51 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
