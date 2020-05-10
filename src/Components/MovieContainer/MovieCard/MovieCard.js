/*
 * File: Movie-Card.js
 * Project: moovee
 * File Created: Friday, 8th May 2020 8:37:19 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 10th May 2020 4:13:27 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState } from 'react';

import { env } from '../../../Config/AppConfig';
import './MovieCard.css';

function MovieCard(props) {
  const initialState = false;
  const [favorite, setFavorite] = useState(initialState);

  const addToFavorites = () => {
    setFavorite(!favorite);
  };

  const { title, release_date, vote_average, poster_path } = props.data;
  return (
    <div className="movie-card">
      <div className="movie-card-container">
        <img
          className="image"
          src={`${env.imageUrl}${poster_path}`}
          alt={title}
        />
        <div className="content">
          <h4 className="title">{title}</h4>
          <p className="date">{release_date}</p>
          <div className="rating">
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
            <p>{vote_average}</p>
          </div>
        </div>

        <div className="footer">
          <button className="primary">Know More</button>
          <button className="icon-primary" onClick={addToFavorites}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                visibility={favorite ? 'hidden' : 'visible'}
                fill="rgba(237,1,94,1)"
                d="M12 22l-9.192-9.192c-2.18-2.568-2.066-6.42.353-8.84A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154L12 22zm7.662-10.509a4.5 4.5 0 00-6.355-6.337L12 6.282l-1.307-1.128a4.5 4.5 0 00-6.355 6.337l.114.132L12 19.172l7.548-7.549.114-.132z"
              />
              <path
                visibility={favorite ? 'visible' : 'hidden'}
                fill="rgba(237,1,94,1)"
                d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
