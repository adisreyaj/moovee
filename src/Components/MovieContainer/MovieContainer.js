/*
 * File: Movie-Container.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 10th May 2020 4:59:25 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import MovieCard from './MovieCard/MovieCard';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { SearchEmpty } from './MovieSearch/SearchEmpty';
import './MovieContainer.css';

function MovieContainer() {
  const data = require('../../Assets/movies.json');
  const [movies, setMovies] = useState(data);
  const searchHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setMovies(() => {
      const filteredMovies = [...data].filter((movie) =>
        movie.original_title.toLowerCase().includes(searchTerm)
      );
      return filteredMovies;
    });
  };

  return (
    <main>
      <section className="movie-search">
        <MovieSearch changed={(event) => searchHandler(event)} />
      </section>
      <section className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return (
              <article className="movie-item" key={movie.id}>
                <MovieCard data={movie} />
              </article>
            );
          })
        ) : (
          <SearchEmpty />
        )}
      </section>
    </main>
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
