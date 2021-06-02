import React from "react";
import StarRating from "../../StarRating/StarRating";
import styles from "./Card.module.scss";

const Card = ({ quote }) => {
  return (
    <div className={styles.container}>
      <span className={styles.qoutes}>,,</span>
      <p>{quote.date}</p>
      <h4>{quote.name}</h4>
      <StarRating rating={quote.rating} />
      <p>{quote.text}</p>
    </div>
  );
};

export default Card;
