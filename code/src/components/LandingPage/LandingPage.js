import React from 'react'
import { Link } from 'react-router-dom'
import Reviews from './ReviewContainer/Reviews'
import mainImage from '../../images/pexels-emre-can-2079438.jpg'

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <Link to="/menu">Go to menu</Link>

      <img src={mainImage} alt="restaurant" width="100%" height="auto" />
      <Reviews />
    </div>
  )
}

export default LandingPage
