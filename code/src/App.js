import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import LandingPage from './components/LandingPage/LandingPage'
import MenuPage from './components/MenuPage/MenuPage'
import Footer from './components/Footer'

const App = () => {
  return (
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
  )
}

export default App
