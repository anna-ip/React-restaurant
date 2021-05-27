import React from 'react'
import Reviews from '../../components/ReviewComponents/REviewComponents/Reviews/Reviews'
import styles from './LandingPage.module.scss'
import mainImage from '../../images/pexels-emre-can-2079438.jpg'

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>
      <img src={mainImage} alt="restaurant" className={styles.img} />
      <Reviews />
    </div>
  )
}

export default LandingPage
