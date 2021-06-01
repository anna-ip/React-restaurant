import React, { createContext, useState, useEffect } from "react";
import reviews from "../reviews.json";

export const ReviewsContext = createContext([]);

const ReviewsContextProvider = (props) => {
  const [reviewsList, setReviewsList] = useState(() => {
    const localData = localStorage.getItem("reviews");
    return localData ? JSON.parse(localData) : reviews.reviews;
  });
  const id = Date.now();

  const addReview = (date, name, text) => {
    setReviewsList([
      ...reviewsList,
      {
        // add star rating aswell
        id: id,
        date: date,
        name: name,
        text: text,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviewsList));
  }, [reviewsList]);

  return (
    <ReviewsContext.Provider value={{ reviewsList, addReview }}>
      {props.children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContextProvider;
