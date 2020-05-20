/*
 * File: index.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 20th May 2020 10:59:28 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { env } from './Config/AppConfig';
import favoritesReducer from './Store/reducers/favorites';
import moviesReducer from './Store/reducers/movies';
import genreReducer from './Store/reducers/genre';

axios.defaults.baseURL = env.tmdbUrl;

const rootReducer = combineReducers({
  fav: favoritesReducer,
  movies: moviesReducer,
  genres: genreReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
