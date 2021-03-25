import React from 'react';
import {Nav} from '../nav/Nav';
import styles from './Header.module.css';
import logo from './logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.header__logo} />
      <Nav />
    </header>
  );
}
