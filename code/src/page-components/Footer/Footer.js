import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h2 className={styles.logo}>The Diner</h2>
      <p>Luddingsbo Mekanikusv 54, 129 88 Stockholm</p>
      <p>08-5754933</p>
    </div>
  )
}

export default Footer
