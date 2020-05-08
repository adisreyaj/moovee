/*
 * File: Movie-Container.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:39:09 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 9th May 2020 12:46:30 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieContainer.css';

function MovieContainer() {
  const data = {
    id: 481848,
    video: false,
    vote_count: 837,
    vote_average: 7.3,
    title: 'The Call of the Wild',
    release_date: '2020-02-19',
    original_language: 'en',
    original_title: 'The Call of the Wild',
    genre_ids: [12, 18, 10751],
    backdrop_path:
      'https://image.tmdb.org/t/p/w300/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg',
    adult: false,
    overview:
      'Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.',
    poster_path:
      'https://image.tmdb.org/t/p/w300/33VdppGbeNxICrFUtW2WpGHvfYc.jpg',
    popularity: 187.873,
    media_type: 'movie',
  };
  return (
    <div className="movie-container">
      <article className="movie-item">
        <MovieCard data={data} />
      </article>
      <article className="movie-item">
        <MovieCard data={data} />
      </article>
      <article className="movie-item">
        <MovieCard data={data} />
      </article>
      <article className="movie-item">
        <MovieCard data={data} />
      </article>
      <article className="movie-item">
        <MovieCard data={data} />
      </article>
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
