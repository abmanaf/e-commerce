import React, { useState } from "react";
import Navbar from "./NavBar.js";
import { SiteDescription } from "./SiteDescription.js";
import Home from "./Home.js";
import Shop from "./Shop.js";
import About from "./About.js";
import Sales from "./Sales.js";
import CartContent from "./CartContent.js";

import { Route, Routes } from "react-router-dom";
//import Footer from './Footer'; //Import the Footer component
import FinalFooter from "./FinalFooter.js";
import { WhatsAppIcon } from "./WhatsAppIcon.js";
//import { BeforeFooter } from './BeforeFooter';
import CheckPointButton from "./CheckPointButton.js";
import LoginPage from "./LoginPage.js";
import SignupPage from "./SignupPage.js";
import Data from "./Data";
import ForgotPassword from "./ForgotPassword.js";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [enteredDetails, setEnteredDetails] = useState([]);

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} cart={cart} />
      <Routes>
        {<Route path="#" element={<SiteDescription />} />}
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Shop"
          element={
            <Shop
              updateCartCount={updateCartCount}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Sales" element={<Sales />} />
        <Route
          path="/CartContent"
          element={
            <CartContent
              cart={cart}
              updateCart={updateCart}
              updateCartCount={updateCartCount}
            />
          }
        />
        <Route path="/CheckPointButton" element={<CheckPointButton />} />
        <Route
          path="/SignupPage"
          element={<SignupPage updateEnteredDetails={setEnteredDetails} />}
        />
        <Route
          path="/LoginPage"
          element={<LoginPage enteredDetails={enteredDetails} />}
        />
        <Route
          path="/Data"
          element={<Data enteredDetails={enteredDetails} />}
        />
        <Route
          path="/ForgotPassword"
          element={<ForgotPassword enteredDetails={enteredDetails} />}
        />
      </Routes>
      <WhatsAppIcon />
      {/*<BeforeFooter/>*/}
      {/*<Footer />*/}
      <FinalFooter />
    </div>
  );
}
