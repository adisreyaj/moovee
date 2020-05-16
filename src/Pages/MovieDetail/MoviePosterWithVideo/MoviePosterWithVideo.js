/*
 * File: MoviePosterWithVideo.js
 * Project: moovee
 * File Created: Sunday, 17th May 2020 12:11:24 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 12:55:00 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, Fragment } from 'react';
import styles from './MoviePosterWithVideo.module.css';
import { env } from '../../../Config/AppConfig';
import playIcon from '../../../Assets/Images/play.svg';
import YouTubePlayer from '../../../Components/YouTubePlayer/YouTubePlayer';

export default function MoviePosterWithVideo({ poster, title, trailer }) {
  const [trailerModal, setTrailerModal] = useState(false);

  const toggleTrailerModal = (visibility) => {
    setTrailerModal(() => visibility);
  };
  const baseImageUrl = env.baseImageUrl;
  return (
    <Fragment>
      <div className={styles.movie__poster}>
        <div
          className={styles.movie__trailer}
          onClick={() => {
            toggleTrailerModal(true);
          }}
        >
          <img src={playIcon} alt="Play Trailer" height="50px" width="50px" />
        </div>
        <img
          className={styles.poster__image}
          src={`${baseImageUrl}w300${poster}`}
          alt={title}
        />
      </div>

      {trailer ? (
        <YouTubePlayer
          videoId={trailer.key}
          title={trailer.name}
          show={trailerModal}
          closeModal={() => toggleTrailerModal(false)}
        />
      ) : null}
    </Fragment>
  );
}
