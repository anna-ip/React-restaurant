import React from 'react'
import styles from './Arrows.module.scss'

const Arrows = ({ nextReview, prevReview }) => {
  return (
    <>
      <button onClick={prevReview} className={styles.prev}>
        <span>←</span>
      </button>
      <button onClick={nextReview} className={styles.next}>
        <span>→</span>
      </button>
    </>
  )
}

export default Arrows
