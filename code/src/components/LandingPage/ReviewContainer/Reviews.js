import React, { useContext, useState, useEffect } from 'react'
import { ReviewContext } from '../../../App'
import Card from './Card'
import Arrows from './Arrows'

const Reviews = () => {
  const [storeReviews] = useContext(ReviewContext)
  const reviews = storeReviews.reviews

  const [reviewData, setReviewData] = useState(reviews)
  const [current, setCurrent] = useState(0)
  const [quote, getQuote] = useState(reviewData[current])

  useEffect(() => {
    getQuote(reviewData[current])
  }, [current, reviewData, quote])

  const nextReview = () => {
    current === reviewData.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  const prevRewiev = () => {
    current === 0 ? setCurrent(reviewData.length - 1) : setCurrent(current - 1)
  }

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        <Card quote={quote} />
        <Arrows nextReview={nextReview} prevRewiev={prevRewiev} />
      </div>
    </div>
  )
}

export default Reviews