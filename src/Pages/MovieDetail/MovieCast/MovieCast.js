/*
 * File: MovieCast.js
 * Project: moovee
 * File Created: Saturday, 16th May 2020 9:16:16 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 19th May 2020 10:15:32 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, useEffect } from 'react';

import CastCard from './CastCard/CastCard';
import http from '../../../Core/axios';
import styles from './MovieCast.module.css';
import { Fragment } from 'react';
export default function MovieCast({ movieId }) {
  const [movieCast, setMovieCast] = useState(undefined);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API;
    http
      .get(`/movie/${movieId}/credits`, {
        params: { api_key: apiKey },
      })
      .then((response) => response.data)
      .then((data) => {
        setMovieCast(() => data.cast);
      });
  }, [movieId]);
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
