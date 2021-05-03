import React from 'react'
import Links from '../Links'
import Reviews from './ReviewContainer/Reviews'
import styles from './LandingPage.module.scss'
import mainImage from '../../images/pexels-emre-can-2079438.jpg'

const LandingPage = () => {
  return (
    <div className={styles.landingpageContainer}>
      <div className={styles.linkContainer}>
        <Links to={'/menu'} text={'Take me to the'} />
        <Links to={'/menu'} text={'Menu'} />
      </div>
      <img src={mainImage} alt="restaurant" className={styles.img} />
      <Reviews />
    </div>
  )
}

export default LandingPage
