import React from "react";
import styles from "./Burger.module.scss";

const Burger = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleKeyPress = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={styles.menuBtn}
        onClick={handleOpen}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex="0"
      >
        <span className={!open ? [styles.burger] : [styles.burgerOpen]}></span>
      </div>
    </>
  );
};

export default Burger;
