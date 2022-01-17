import React from "react";
import NavLinks from "../../../../ui-components/NavLink/NavLinks";
import styles from "./NavButtons.module.scss";

const NavButtons = () => {
  return (
    <>
      <NavLinks to="/" text="Home" className={styles.styledLink} />
      <NavLinks to="/menu" text="Menu" className={styles.styledLink} />
      <NavLinks to="/" text="About" className={styles.styledLink} />
      <NavLinks to="/" text="Contact" className={styles.styledLink} />
    </>
  );
};

export default NavButtons;
