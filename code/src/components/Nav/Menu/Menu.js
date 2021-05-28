import React from "react";
import styles from "./Menu.module.scss";
import Buttons from "./Links/Buttons";

function Menu({ open, setOpen }) {
  return (
    <>
      <nav open={open} className={!open ? [styles.nav] : [styles.navOpen]}>
        <ul className={!open ? [styles.menuNav] : [styles.menuNavOpen]}>
          <li className={styles.menuNavItem}>
            <Buttons open={open} setOpen={setOpen} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
