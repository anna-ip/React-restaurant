import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <address>
        <h2 className={styles.logo}>The Diner</h2>
        <p>Luddingsbo Mekanikusv 54, 129 88 Stockholm</p>
        <p>08-5754933</p>
      </address>
    </footer>
  );
};

export default Footer;
