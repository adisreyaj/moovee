/*
 * File: Header.js
 * Project: my-first-app
 * File Created: Friday, 8th May 2020 8:07:40 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 17th May 2020 10:55:30 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import logo from '../../Assets/Images/moovee.svg';
import github from '../../Assets/Images/github.svg';
import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
const Header = (props) => {
  const menuDisplay = props.enabled;
  let menuClasses = ['menu'];
  let headerClasses = ['header'];
  if (menuDisplay) menuClasses.push('enabled') && headerClasses.push('sticky');

  return (
    <header
      className={headerClasses.reduce(
        (acc, curr) => `${acc} ${styles[curr]}`,
        ''
      )}
    >
      <div className={styles['header-container']}>
        <div className={styles.brand}>
          <Link to="/">
            <img src={logo} alt="Moovee" />
          </Link>
        </div>
        <nav
          className={menuClasses.reduce(
            (acc, curr) => `${acc} ${styles[curr]}`,
            ''
          )}
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
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
