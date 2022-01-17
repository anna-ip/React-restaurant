import React, { useContext } from "react";
import useCarousel from "../../../hooks/useCarousel";
import Links from "../../../ui-components/Link/Links";
import Card from "../Card/Card";
import Arrows from "../Arrows/Arrows";
import styles from "./Reviews.module.scss";
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
        <Links
          to="/review"
          text="Share Your Feedback ✎"
          className={styles.link}
        />
      </section>
    </article>
  );
};

export default Reviews;
