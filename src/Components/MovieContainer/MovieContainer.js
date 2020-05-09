/*
 * File: Movie-Container.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 9th May 2020 8:59:40 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

function MovieContainer() {
  const data = require('../../Assets/movies.json');
  console.log({ data });
  return (
    <div className="movie-container">
      {data.map((movie) => {
        return (
          <article className="movie-item" key={movie.id}>
            <MovieCard data={movie} />
          </article>
        );
      })}
    </div>
  );
}

// async function getLatestMovies() {
//   const movies = fetch({
//     method: 'get',
//     url: `https://api.themoviedb.org/3/movie/latest?api_key=${env.apiKey}`,
//   });
//   return await movies.then((data) => data.json());
// }

export default MovieContainer;
