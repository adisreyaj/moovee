/*
 * File: Home.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:30 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 8th May 2020 9:15:28 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';

import MovieContainer from '../../Components/Movie-Container/Movie-Container';
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
