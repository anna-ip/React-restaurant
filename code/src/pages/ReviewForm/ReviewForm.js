import React, { useState, useContext } from "react";
import { ReviewsContext } from "../../contexts/ReviewsContext";
import Button from "../../ui-components/Button/Button";
//import { withRouter } from "react-router-dom";
import styles from "./ReviewForm.module.scss";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const { addReview } = useContext(ReviewsContext);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
    // add Star rating as well
    addReview(today, name, text);
    location.replace("/");

    // clears form after submit
    setName("");
    setText("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>{today}</p>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p>
          <span role="img" aria-label="rating-stars">
            ⭐︎⭐︎⭐︎⭐︎⭐︎
          </span>
        </p>
        <label>
          Review:
          <textarea
            type="textarea"
            name="reviewText"
            placeholder="Your review"
            value={text}
            rows="5"
            required
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input type="submit" value="Post review" className={styles.btn} />
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
