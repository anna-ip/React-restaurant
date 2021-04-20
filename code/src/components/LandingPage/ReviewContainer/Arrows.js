import React from 'react'

const Arrows = ({ nextReview, prevRewiev }) => {
  return (
    <>
      <button onClick={prevRewiev}>
        <span>◀︎</span>
      </button>
      <button onClick={nextReview}>
        <span>▶︎</span>
      </button>
    </>
  )
}

export default Arrows
