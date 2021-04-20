import React from 'react'
import './App.css'
import Header from './Header'
import LandingPage from './LandingPage/LandingPage'
import MenuPage from './MenuPage/MenuPage'
import Footer from './Footer'

// Add React router

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <MenuPage />
      <Footer />
    </>
  )
}

export default App
