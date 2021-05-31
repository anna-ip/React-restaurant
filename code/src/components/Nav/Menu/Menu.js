import React from "react";
import useViewPort from "../../../hooks/useViewport";
import styles from "./Menu.module.scss";
import NavButtons from "./Links/NavButtons";

function Menu({ open, setOpen }) {
  const { width } = useViewPort();
  const breakpoint = 680;

  const handleRedirect = () => {
    width < breakpoint ? setOpen(!open) : setOpen(open);
  };

  return (
    <>
      <nav open={open} className={!open ? [styles.nav] : [styles.navOpen]}>
        <ul className={!open ? [styles.menuNav] : [styles.menuNavOpen]}>
          <li>
            <div
              className={styles.menuNavItem}
              onClick={() => handleRedirect()}
              onKeyPress={handleRedirect}
              role="presentation"
            >
              <NavButtons />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
