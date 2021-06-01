import React, { useState } from "react";
//import { ReviewContext } from "../../App";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  // const [storeReviews, setStoreReviews] = useContext(ReviewContext);
  // const reviews = storeReviews.reviews;
  // console.log(reviews, setStoreReviews);
  //import reviewContext and set the id, date, name and reviewText to the setStoreReview

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      ` Form submitted, {"id:" 1, "date:" "${today}", "name:" ${name}, "text:"${reviewText}} `
    );
    // setStoreReviews();

    // clear form after submit
    setName("");
    setReviewText("");
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
            placeholder="Your review "
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </label>
        <input type="submit" value="Post review" />
      </form>
    </>
  );
};

export default ReviewForm;
