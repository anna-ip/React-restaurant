import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import MenuPage from './components/MenuPage/MenuPage'
import Footer from './components/Footer/Footer'

import menus from './menus.json'
import reviews from './reviews.json'

export const MenuContext = React.createContext([])
export const ReviewContext = React.createContext([])

const App = () => {
  const [storeMenus, setStoreMenus] = useState(menus)
  const [storeReviews, setStoreReviews] = useState(reviews)

  return (
    <MenuContext.Provider value={[storeMenus, setStoreMenus]}>
      <ReviewContext.Provider value={[storeReviews, setStoreReviews]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/menu">
              <MenuPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ReviewContext.Provider>
    </MenuContext.Provider>
  )
}

export default App
