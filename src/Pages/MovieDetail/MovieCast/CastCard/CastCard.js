/*
 * File: CastCard.js
 * Project: moovee
 * File Created: Saturday, 16th May 2020 9:19:35 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 16th May 2020 11:57:20 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { env } from '../../../../Config/AppConfig';
import styles from './CastCard.module.css';
import userPlaceholder from '../../../../Assets/Images/user_placeholder.jpg';

export default function CastCard({ data }) {
  const baseImageUrl = env.baseImageUrl;
  return (
    <article className={styles.cast}>
      <div className={styles.cast__content}>
        <section className={styles.cast__header}>
          <img
            src={
              data.profile_path
                ? `${baseImageUrl}w200${data.profile_path}`
                : userPlaceholder
            }
            alt=""
          />
        </section>
        <section className={styles.cast__body}>
          <p className={styles.cast__name}>
            {data.name.slice(0, 15)}
            {data.name.length > 15 ? '...' : ''}
          </p>
          <p className={styles.cast__character}>
            {data.character.slice(0, 15)}
            {data.name.length > 15 ? '...' : ''}
          </p>
        </section>
        <section className={styles.cast__footer}></section>
      </div>
    </article>
  );
}
