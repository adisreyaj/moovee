/*
 * File: YouTubePlayer.js
 * Project: moovee
 * File Created: Sunday, 17th May 2020 12:07:44 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 1:04:49 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { Fragment } from 'react';
import styles from './YouTubePlayer.module.css';

export default function YouTubePlayer({ videoId, title, show, closeModal }) {
  return show ? (
    <Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.close}>
        <button onClick={() => closeModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
          <p>Close Trailer</p>
        </button>
      </div>
      <div className={styles['video-container']}>
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Fragment>
  ) : null;
}
