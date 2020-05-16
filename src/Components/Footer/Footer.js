/*
 * File: Footer.js
 * Project: moovee
 * File Created: Saturday, 16th May 2020 11:46:50 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Saturday, 16th May 2020 11:53:36 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';

import styles from './Footer.module.css';
import mooveeLogo from '../../Assets/Images/moovee.svg';
import tmbdLogo from '../../Assets/Images/tmdb.svg';

export default function Footer() {
  return (
    <footer className={[styles.footer, 'box-layout'].join(' ')}>
      <img src={mooveeLogo} alt="MOOVEE Logo" height="30px" />
      <p>MOOVEE - Curate and Share your favorite movies</p>
      <img src={tmbdLogo} alt="TMBD Logo" />
    </footer>
  );
}
