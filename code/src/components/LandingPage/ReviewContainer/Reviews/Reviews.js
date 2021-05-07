import React, { useState, useEffect, useContext } from 'react'
import { ReviewContext } from '../../../../App'
import Card from '../Card/Card'
import Arrows from '../Arrows/Arrows'
import styles from './Reviews.module.scss'

const Reviews = () => {
  const [storeReviews] = useContext(ReviewContext)
  const reviews = storeReviews.reviews
  //console.log(JSON.stringify(reviews))

  const [current, setCurrent] = useState(0)
  console.log('current', current)
  const [quote, getQuote] = useState(reviews[current])
  console.log('quote', quote)

  useEffect(() => {
    getQuote(reviews[current])
  }, [current, reviews, quote])

  const nextReview = () => {
    current === reviews.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  const prevRewiev = () => {
    current === 0 ? setCurrent(reviews.length - 1) : setCurrent(current - 1)
  }

  return (
    <div className={styles.container}>
      <h3>Reviews</h3>
      <section>
        <span className={styles.qoutes}>,,</span>
        <Card quote={quote} />
        <Arrows nextReview={nextReview} prevRewiev={prevRewiev} />
      </section>
    </div>
  )
}

export default Reviews
