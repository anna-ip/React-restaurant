import React from 'react'

const Card = ({ quote }) => {
  return (
    <>
      <p>{quote.name}</p>
      <p>{quote.text}</p>
    </>
  )
}

export default Card
