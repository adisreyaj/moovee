/*
 * File: Movie-Container.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 21st May 2020 11:08:58 pm
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
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_MOVIES,
  ADD_GENRES,
} from '../../Store/actions';

function MovieContainer({
  favorites,
  movies: storedMovies,
  genres,
  onAddFavorite,
  onRemoveFavorite,
  onSetMovies,
  onSetGenres,
}) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(undefined);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const apiKey = process.env.REACT_APP_TMDB_API;

  useEffect(() => {
    getMovies();
  }, [storedMovies]);

  useEffect(() => {
    getGenres();
  }, [genres]);

  /**
   * Check if the movies are saved to the store.
   * If Yes, use the movies data from the store
   * If No, make the api call to get the movies
   */
  const getMovies = () => {
    const trendingUrl = `trending/movie/week`;
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
  };

  const getGenres = () => {
    const genreUrl = `genre/movie/list`;
    if (!genres || genres.length === 0) {
      Axios.get(genreUrl, {
        params: {
          api_key: apiKey,
        },
      })
        .then((res) => res.data.genres)
        .then(onSetGenres);
    }
  };

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

  const filterHandler = (selectedGenres) => {
    if (selectedGenres)
      setMovies(() => {
        const filtered = [...filteredMovies].filter((movie) => {
          const movieGenres = new Set(movie.genre_ids);
          const genreMatches = selectedGenres.map((genreId) => {
            return movieGenres.has(genreId);
          });
          return genreMatches.some((item) => item);
        });
        return filtered;
      });
    else setMovies(() => storedMovies);
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
        <MovieSearch
          changed={(event) => searchHandler(event)}
          genres={genres}
          filtered={(selectedGenres) => filterHandler(selectedGenres)}
        />
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
    genres: state.genres.genres,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddFavorite: (movieId) =>
      dispatch({ type: ADD_FAVORITE, value: movieId }),
    onRemoveFavorite: (movieId) =>
      dispatch({ type: REMOVE_FAVORITE, value: movieId }),
    onSetMovies: (movies) => dispatch({ type: ADD_MOVIES, payload: movies }),
    onSetGenres: (genres) => dispatch({ type: ADD_GENRES, payload: genres }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
