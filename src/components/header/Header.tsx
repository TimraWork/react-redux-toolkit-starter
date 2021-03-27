import React from "react";
import { Lang } from "../Lang/Lang";
import { Nav } from "../Nav/Nav";
import styles from "./Header.module.css";
import logo from "./logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.header__logo} />
      <Nav />
      <Lang />
    </header>
  );
}
