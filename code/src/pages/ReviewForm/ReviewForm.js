import React, { useState, useContext } from "react";
import { ReviewsContext } from "../../contexts/ReviewsContext";

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

    // clears form after submit
    setName("");
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Date: {today}</p>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
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
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input type="submit" value="Post review" />
      </form>
    </>
  );
};

export default ReviewForm;
