/*
 * File: Search.js
 * Project: moovee
 * File Created: Sunday, 10th May 2020 12:29:51 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 21st May 2020 12:00:04 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';
import styles from './MovieSearch.module.css';

export const MovieSearch = (props) => {
  const [filter, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter((prevState, _) => {
      return !prevState;
    });
  };
  return (
    <div className={styles['movie-search']}>
      <section className={styles['movie-search__input-field']}>
        <svg
          className={styles['movie-search-icon']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" />
        </svg>
        <input
          type="text"
          aria-label="Search movies"
          placeholder="Search your fav movies"
          onChange={props.changed}
        />
        <button
          className="icon-primary"
          aria-label="Search filter"
          onClick={() => toggleFilter()}
        >
          <svg
            className={styles['movie-filter-icon']}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5L12 13.394 17.596 5H6.404z" />
          </svg>
        </button>
      </section>
      {filter ? (
        <section className={styles['movie-search__filter']}>
          <div>
            {props.genres.map((genre) => {
              return (
                <div key={genre.id}>
                  <input
                    type="checkbox"
                    name={genre.name}
                    id={genre.id}
                    value={genre.name}
                  />
                  <label htmlFor={genre.id}>{genre.name}</label>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
};
