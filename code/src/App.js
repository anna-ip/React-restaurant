import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./page-components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import MenuPage from "./pages/Menu/MenuPage";
import ReviewForm from "./pages/ReviewForm/ReviewForm";
import Footer from "./page-components/Footer/Footer";
import "./App.scss";

import menus from "./menus.json";
import ReviewsContextProvider from "./contexts/ReviewsContext";

export const MenuContext = React.createContext({ menus: [] });

const App = () => {
  const [storeMenus, setStoreMenus] = useState(menus);

  return (
    <MenuContext.Provider value={[storeMenus, setStoreMenus]}>
      <ReviewsContextProvider>
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
      </ReviewsContextProvider>
    </MenuContext.Provider>
  );
};

export default App;
