/*
 * File: Home.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:30 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 9th May 2020 12:04:51 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';

import MovieContainer from '../../Components/MovieContainer/MovieContainer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <MovieContainer />
      </div>
    </div>
  );
};

export default Home;
