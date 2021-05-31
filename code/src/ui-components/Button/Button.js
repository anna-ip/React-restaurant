import React from "react";
import styles from "./Button.module.scss";

const Button = ({ className, value, onClick }) => {
  return (
    <>
      <button
        className={className + " " + styles.btn}
        onClick={onClick}
        value={value}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
