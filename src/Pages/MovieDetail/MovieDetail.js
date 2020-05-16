/*
 * File: MovieDetail.js
 * Project: moovee
 * File Created: Saturday, 16th May 2020 6:28:53 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 12:39:05 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useEffect, useState } from 'react';
import http from '../../Core/axios';
import { env } from '../../Config/AppConfig';
import imdb from '../../Assets/Images/imdb.svg';
import styles from './MovieDetail.module.css';
import MovieCast from './MovieCast/MovieCast';
import MovieKeywords from './MovieKeywords/MovieKeywords';
import MoviePosterWithVideo from './MoviePosterWithVideo/MoviePosterWithVideo';

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
        console.log({ data });

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
            <div className={styles.movie__stats}>
              <p>{movie.release_date.split('-')[0]}</p>
              <p>{formatTime(movie.runtime)}</p>
              <a
                href={`http://imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imdb} alt="View on IMDB" height="25" />
              </a>
            </div>
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
