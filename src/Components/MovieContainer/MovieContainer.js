/*
 * File: Movie-Container.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 16th May 2020 6:39:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import MovieCard from './MovieCard/MovieCard';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { SearchEmpty } from './MovieSearch/SearchEmpty';
import './MovieContainer.css';

function MovieContainer() {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const searchHandler = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setMovies(() => {
      const filtered = [...filteredMovies].filter((movie) =>
        movie.original_title.toLowerCase().includes(searchTerm)
      );
      return filtered;
    });
  };

  const favoritesHandler = (movieId) => {
    setFavorites((prevState, _) => {
      const checkIfFavorite = prevState.find((item) => item === movieId);
      if (checkIfFavorite)
        return [...prevState].filter((item) => item !== movieId);
      return [...prevState, movieId];
    });
  };

  const checkIfFavorite = (movieId) => {
    return favorites.find((item) => item === movieId);
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API;
    const trendingUrl = `trending/movie/week`;
    Axios.get(trendingUrl, {
      params: {
        api_key: apiKey,
      },
    })
      .then((res) => res.data.results)
      .then((movies) => {
        setMovies(movies);
        setFilteredMovies(movies);
      });
    return () => {};
  }, []);

  return (
    <main>
      <section className="movie-search">
        <MovieSearch changed={(event) => searchHandler(event)} />
      </section>
      <section>
        <h2 className="heading">Top Movies</h2>
      </section>
      <section className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return (
              <article className="movie-item" key={movie.id}>
                <MovieCard
                  data={movie}
                  favorite={checkIfFavorite(movie.id)}
                  toggleFavorite={(movieId) => favoritesHandler(movieId)}
                />
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

export default MovieContainer;
