import React from 'react'
import { Link } from 'react-router-dom'
import Reviews from './ReviewContainer/Reviews'
import styles from './LandingPage.module.scss'
import mainImage from '../../images/pexels-emre-can-2079438.jpg'

const LandingPage = () => {
  return (
    <div className={styles.landingpageContainer}>
      <div className={styles.linkContainer}>
        <Link to="/menu" className={styles.link}>
          Take me to the
        </Link>
        <Link to="/menu" className={styles.menu}>
          Menu
        </Link>
      </div>
      <img src={mainImage} alt="restaurant" width="100%" height="auto" />
      <Reviews />
    </div>
  )
}

export default LandingPage
