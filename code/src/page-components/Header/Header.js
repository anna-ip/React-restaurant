import React from "react";
import NavBar from "../../components/Nav/NavBar/NavBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <NavBar />
      <h1 className={styles.logo}>The Diner</h1>
    </header>
  );
};

export default Header;
