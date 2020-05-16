/*
 * File: MovieCast.js
 * Project: moovee
 * File Created: Saturday, 16th May 2020 9:16:16 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 1:43:14 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useEffect } from 'react';

import CastCard from './CastCard/CastCard';
import http from '../../../Core/axios';
import styles from './MovieCast.module.css';
import { Fragment } from 'react';
export default function MovieCast(props) {
  const [movieCast, setMovieCast] = useState(undefined);
  const apiKey = process.env.REACT_APP_TMDB_API;
  useEffect(() => {
    const movieId = props.movieId;
    http
      .get(`/movie/${movieId}/credits`, {
        params: { api_key: apiKey },
      })
      .then((response) => response.data)
      .then((data) => {
        setMovieCast(() => data.cast);
      });
  }, []);
  return movieCast ? (
    <Fragment>
      <h3 className="section-heading">Meet the Cast</h3>
      <div className={styles['movie-cast-container']}>
        {movieCast.map((cast) => (
          <CastCard key={cast.cast_id} data={cast} />
        ))}
      </div>
    </Fragment>
  ) : (
    <p>Loading...</p>
  );
}
