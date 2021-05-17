import { useState, useEffect } from 'react'

const useCurrent = (data) => {
  const [current, setCurrent] = useState(0)
  const [quote, getQuote] = useState(data[current])

  useEffect(() => {
    getQuote(data[current])
  }, [current, data, quote])

  const nextReview = () => {
    current === data.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  const prevRewiev = () => {
    current === 0 ? setCurrent(data.length - 1) : setCurrent(current - 1)
  }

  return [nextReview, prevRewiev, quote]
}

export default useCurrent
