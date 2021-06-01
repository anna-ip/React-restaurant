import React, { useContext } from "react";
import { ReviewContext } from "../../../App";
import Card from "../Card/Card";
import Arrows from "../Arrows/Arrows";
import styles from "./Reviews.module.scss";
import useCarousel from "../../../hooks/useCarousel";

const Reviews = () => {
  const [storeReviews] = useContext(ReviewContext);
  const reviews = storeReviews.reviews;
  console.log(reviews);

  const [nextReview, prevReview, quote] = useCarousel(reviews);

  return (
    <article className={styles.container}>
      <h3>Reviews</h3>
      <section>
        <Card quote={quote} />
        <Arrows nextReview={nextReview} prevReview={prevReview} />
      </section>
    </article>
  );
};

export default Reviews;
