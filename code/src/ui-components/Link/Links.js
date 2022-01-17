import React from "react";
import { Link } from "react-router-dom";
import styles from "./Links.module.scss";

const Links = ({ to, text, className }) => {
  return (
    <Link to={to} text={text} className={className + " " + styles.link}>
      {text}
    </Link>
  );
};

export default Links;
