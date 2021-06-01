import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./page-components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import MenuPage from "./pages/Menu/MenuPage";
import ReviewForm from "./pages/ReviewForm/ReviewForm";
import Footer from "./page-components/Footer/Footer";
import "./App.scss";

import menus from "./menus.json";
import reviews from "./reviews.json";

export const MenuContext = React.createContext({ menus: [] });
export const ReviewContext = React.createContext({ reviews: [] });

const App = () => {
  const [storeMenus, setStoreMenus] = useState(menus);
  const [storeReviews, setStoreReviews] = useState(reviews);

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
            <Route path="/review">
              <ReviewForm />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ReviewContext.Provider>
    </MenuContext.Provider>
  );
};

export default App;
