import React, { useContext } from "react";
import Card from "../Card/Card";
import Arrows from "../Arrows/Arrows";
import styles from "./Reviews.module.scss";
import useCarousel from "../../../hooks/useCarousel";
import { ReviewsContext } from "../../../contexts/ReviewsContext";

const Reviews = () => {
  const { reviewsList } = useContext(ReviewsContext);
  const [nextReview, prevReview, quote] = useCarousel(reviewsList);

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
