/*
 * File: Backdrop.js
 * Project: moovee
 * File Created: Friday, 15th May 2020 11:30:08 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 15th May 2020 11:33:20 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import styles from './Backdrop.module.css';

export default function Backdrop(props) {
  return props.enabled ? <div className={styles.backdrop}></div> : null;
}
