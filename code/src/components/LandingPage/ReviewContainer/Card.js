import React from 'react'
import styles from './Card.module.scss'

const Card = ({ quote }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>{quote.name}</h4>
      <p className={styles.quote}>{quote.text}</p>
    </div>
  )
}

export default Card
