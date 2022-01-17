import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.scss";

const StarRating = ({ handleRating, rating }) => {
  const arr = [...Array(5)];

  return (
    <div className={styles.container}>
      {arr.map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={handleRating}
            />
            <FaStar
              className={
                ratingValue <= rating ? styles.yellowStar : styles.star
              }
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
