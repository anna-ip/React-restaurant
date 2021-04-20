import React from 'react'
import Reviews from './ReviewContainer/Reviews'

const LandingPage = () => {
  return (
    <div className="landingpage-container">
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
