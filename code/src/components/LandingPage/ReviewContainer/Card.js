import React from 'react'
import styles from './Card.module.scss'

const Card = ({ quote }) => {
  return (
    <div className={styles.container}>
      <h4>{quote.name}</h4>
      <p>{quote.text}</p>
    </div>
  )
}

export default Card
