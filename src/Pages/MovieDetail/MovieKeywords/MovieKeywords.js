/*
 * File: MovieKeywords.js
 * Project: moovee
 * File Created: Saturday, 16th May 2020 10:58:27 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 19th May 2020 10:13:33 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useEffect, useState } from 'react';
import styles from './MovieKeywords.module.css';
import http from '../../../Core/axios';
import { Fragment } from 'react';

export default function MovieKeywords({ movieId }) {
  const [keywords, setKeywords] = useState(undefined);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API;
    http
      .get(`/movie/${movieId}/keywords`, {
        params: { api_key: apiKey },
      })
      .then((response) => response.data)
      .then((data) => {
        setKeywords(() => data.keywords);
      });
  }, [movieId]);
  return keywords ? (
    <Fragment>
      <h3 className="section-heading">Keywords</h3>
      <div className={styles['keywords-container']}>
        {keywords.map((keyword) => {
          return (
            <article key={keyword.id} className={styles.keyword__item}>
              <p>{keyword.name}</p>
            </article>
          );
        })}
      </div>
    </Fragment>
  ) : (
    <p>Loading...</p>
  );
}
