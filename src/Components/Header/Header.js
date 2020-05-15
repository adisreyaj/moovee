/*
 * File: Header.js
 * Project: my-first-app
 * File Created: Friday, 8th May 2020 8:07:40 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 15th May 2020 11:42:36 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import logo from '../../Assets/Images/moovee.svg';
import github from '../../Assets/Images/github.svg';
import styles from './Header.module.css';
const Header = (props) => {
  const menuDisplay = props.enabled;
  let menuClasses = ['menu'];
  if (menuDisplay) menuClasses.push('enabled');

  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles.brand}>
          <img src={logo} alt="Moovee" />
        </div>
        <nav
          className={menuClasses.reduce(
            (acc, curr) => `${acc} ${styles[curr]}`,
            ''
          )}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <a
                href="https://github.com/adisreyaj/moovee"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={github} alt="Github" />
              </a>
            </li>
          </ul>
        </nav>
        <button
          className={`icon-primary ${styles['mobile-menu-toggle']}`}
          onClick={() => props.menuToggled()}
        >
          {menuDisplay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"
                fill="#120d31"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
