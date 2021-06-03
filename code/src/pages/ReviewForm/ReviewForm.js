import React, { useState, useContext } from "react";
import StarRating from "../../components/StarRating/StarRating";
import { ReviewsContext } from "../../contexts/ReviewsContext";

import Button from "../../ui-components/Button/Button";
import Input from "../../ui-components/Input/Input";
import TextArea from "../../ui-components/TextArea/TextArea";
import styles from "./ReviewForm.module.scss";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const { addReview } = useContext(ReviewsContext);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toDateString();

  const handleSubmit = (e) => {
    e.preventDefault();

    addReview(today, name, rating, text);
    location.replace("/");

    setName("");
    setText("");
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>{today}</p>
        <Input
          label="Name:"
          type="text"
          name="name"
          placeholder="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <StarRating
          rating={rating}
          onChange={handleRating}
          handleRating={handleRating}
        />
        <TextArea
          label="Review:"
          name="reviewText"
          placeholder="Your review"
          value={text}
          rows="5"
          required
          onChange={(e) => setText(e.target.value)}
        />
        <Input type="submit" value="Post review" className={styles.btn} />
        <Button
          className={styles.btn}
          value="Take me back"
          onClick={() => location.replace("/")}
        />
      </form>
    </div>
  );
};

export default ReviewForm;
