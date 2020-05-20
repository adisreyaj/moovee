/*
 * File: Movie-Container.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 20th May 2020 10:55:47 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { MovieCard, MovieCardSkeleton } from './MovieCard/MovieCard';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { SearchEmpty } from './MovieSearch/SearchEmpty';
import './MovieContainer.css';
import { connect } from 'react-redux';
import { ADD_FAVORITE, REMOVE_FAVORITE, ADD_MOVIES } from '../../Store/actions';

function MovieContainer({
  favorites,
  movies: storedMovies,
  onAddFavorite,
  onRemoveFavorite,
  onSetMovies,
}) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(undefined);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  console.log(
    `%cStored:${storedMovies}`,
    'background-color: green, color: #000'
  );

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API;
    const trendingUrl = `trending/movie/week`;
    /**
     * Check if the movies are saved to the store.
     * If Yes, use the movies data from the store
     * If No, make the api call to get the movies
     */
    if (!storedMovies || storedMovies.length === 0) {
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
          onSetMovies(movies);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
      setMovies(storedMovies);
      setFilteredMovies(storedMovies);
    }
  }, [storedMovies]);

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
    checkIfFavorite(movieId)
      ? onRemoveFavorite(movieId)
      : onAddFavorite(movieId);
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

const mapStateToProps = (state) => {
  return {
    favorites: state.fav.favorites,
    movies: state.movies.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddFavorite: (movieId) =>
      dispatch({ type: ADD_FAVORITE, value: movieId }),
    onRemoveFavorite: (movieId) =>
      dispatch({ type: REMOVE_FAVORITE, value: movieId }),
    onSetMovies: (movies) => dispatch({ type: ADD_MOVIES, payload: movies }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
