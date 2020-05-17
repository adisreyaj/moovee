/*
 * File: Movie-Container.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 12:32:17 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { MovieCard, MovieCardSkeleton } from './MovieCard/MovieCard';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { SearchEmpty } from './MovieSearch/SearchEmpty';
import './MovieContainer.css';

function MovieContainer() {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState(undefined);
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

  const getMovieItems = (moviesList) => {
    return !loading && moviesList && moviesList.length > 0 ? (
      moviesList.map((movie) => {
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
    );
  };

  const getLoadingCards = () => {
    return Array(10)
      .fill('something')
      .map((_, i) => {
        return (
          <article className="movie-item" key={i}>
            <MovieCardSkeleton />
          </article>
        );
      });
  };
  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API;
    const trendingUrl = `trending/movie/week`;
    if (!movies) {
      Axios.get(trendingUrl, {
        params: {
          api_key: apiKey,
        },
      })
        .then((res) => res.data.results)
        .then((movies) => {
          setMovies(movies);
          setFilteredMovies(movies);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  });

  return (
    <main>
      <section className="movie-search">
        <MovieSearch changed={(event) => searchHandler(event)} />
      </section>
      <section>
        <h2 className="heading">Top Movies</h2>
      </section>
      <section className="movie-container">
        {loading ? getLoadingCards() : getMovieItems(movies)}
      </section>
    </main>
  );
}

export default MovieContainer;
