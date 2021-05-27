import React from 'react'
import styles from './Arrows.module.scss'
import Button from '../../../ui-components/Button'

const Arrows = ({ nextReview, prevReview }) => {
  return (
    <>
      <Button onClick={prevReview} className={styles.prev} value={'←'} />
      <Button onClick={nextReview} className={styles.next} value={'→'} />
    </>
  )
}

export default Arrows
