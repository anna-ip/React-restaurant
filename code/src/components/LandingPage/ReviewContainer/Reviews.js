import React, { useContext, useState, useEffect } from 'react'
import { ReviewContext } from '../../../App'
import Card from './Card'
import Arrows from './Arrows'
import styles from './Reviews.module.scss'

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
    <div className={styles.container}>
      <h3>Reviews</h3>
      <section>
        <span className={styles.coutes}>,,</span>
        <Card quote={quote} />
        <Arrows nextReview={nextReview} prevRewiev={prevRewiev} />
      </section>
    </div>
  )
}

export default Reviews
