/*
 * File: MovieDetail.js
 * Project: moovee
 * File Created: Saturday, 16th May 2020 6:28:53 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 1:19:35 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useEffect, useState } from 'react';
import http from '../../Core/axios';
import { env } from '../../Config/AppConfig';
import styles from './MovieDetail.module.css';
import MovieCast from './MovieCast/MovieCast';
import MovieKeywords from './MovieKeywords/MovieKeywords';
import MoviePosterWithVideo from './MoviePosterWithVideo/MoviePosterWithVideo';
import MovieStats from './MovieStats/MovieStats';

export default function MovieDetail(props) {
  const apiKey = process.env.REACT_APP_TMDB_API;
  const baseImageUrl = env.baseImageUrl;
  const [movie, setMovie] = useState(undefined);
  const [trailer, setTrailer] = useState(undefined);
  const { match } = props;
  const movieId = match.params.id;

  const formatTime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };
  useEffect(() => {
    http
      .get(`/movie/${movieId}`, {
        params: { api_key: apiKey },
      })
      .then((response) => response.data)
      .then((data) => {
        setMovie(() => data);
      });

    http
      .get(`/movie/${movieId}/videos`, {
        params: { api_key: apiKey },
      })
      .then((response) => response.data.results)
      .then((videos) => {
        let video = videos.find((item) => item.type === 'Trailer');
        if (!video) video = videos.find((item) => item.type === 'Teaser');
        return video;
      })
      .then((data) => {
        setTrailer(() => data);
      });
  }, []);
  return movie ? (
    <div>
      <section className={styles.movie__header}>
        <div
          className={styles.movie__backdrop}
          style={{
            backgroundImage: `url('${baseImageUrl}w1280${movie.backdrop_path}')`,
          }}
        >
          <div className={styles.movie__overlay}></div>
        </div>
        <div className={styles.movie__content}>
          <MoviePosterWithVideo
            poster={movie.poster_path}
            title={movie.title}
            trailer={trailer ? trailer : undefined}
          />
          <div className={styles.movie__meta}>
            <h1>{movie.title}</h1>
            <MovieStats
              date={movie.release_date}
              duration={movie.runtime}
              imdbId={movie.imdb_id}
            />
            <p className={styles.movie__overview}>{movie.overview}</p>
          </div>
        </div>
      </section>

      <section className={styles.movie__cast}>
        <MovieCast movieId={movieId} />
      </section>

      <section className={[styles.movie__keyword, 'box-layout'].join(' ')}>
        <MovieKeywords movieId={movieId} />
      </section>
      <section className={styles.movie__body}></section>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
