import React from 'react'
import { Link } from 'react-router-dom'
import Reviews from './ReviewContainer/Reviews'

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <Link to="/menu">Go to menu</Link>

      <img
        src="/assets/pexels-emre-can-2079438.jpg"
        alt="restaurant"
        width="100%"
        height="auto"
      />
      <Reviews />
    </div>
  )
}

export default LandingPage
