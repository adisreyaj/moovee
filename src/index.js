/*
 * File: index.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 19th May 2020 10:43:59 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { env } from './Config/AppConfig';
import reducer from './Store/reducer';

axios.defaults.baseURL = env.tmdbUrl;

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
