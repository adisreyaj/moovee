/*
 * File: Search.js
 * Project: moovee
 * File Created: Sunday, 10th May 2020 12:29:51 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 1:25:40 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import './MovieSearch.css';

export const MovieSearch = (props) => {
  return (
    <div className="movie-search-field">
      <figure className="movie-search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" />
        </svg>
      </figure>
      <input
        type="text"
        aria-label="Search movies"
        placeholder="Search your fav movies"
        onChange={props.changed}
      />
    </div>
  );
};
