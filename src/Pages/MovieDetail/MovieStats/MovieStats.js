/*
 * File: MovieStats.js
 * Project: moovee
 * File Created: Sunday, 17th May 2020 1:16:01 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 10:50:32 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import imdb from '../../../Assets/Images/imdb.svg';
import styles from './MovieStats.module.css';

export default function MovieStats({ date, duration, rating, imdbId }) {
  return (
    <div className={styles.movie__stats}>
      <div className={styles['movie__stats-item']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
            fill="rgba(34,195,101,1)"
          />
        </svg>
        <p>{rating}</p>
      </div>
      <div className={styles['movie__stats-item']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M17 3h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z" />
        </svg>
        <p>{date.split('-')[0]}</p>
      </div>
      <div className={styles['movie__stats-item']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm3.536-12.95l1.414 1.414-4.95 4.95L10.586 12l4.95-4.95z" />
        </svg>
        <p>{duration}</p>
      </div>
      <a
        href={`http://imdb.com/title/${imdbId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imdb} alt="View on IMDB" height="25" />
      </a>
    </div>
  );
}
