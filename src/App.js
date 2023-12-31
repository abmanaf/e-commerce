import React, { useState } from "react";
import Navbar from "./NavBar";
import { SiteDescription } from "./SiteDescription";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Sales from "./Sales";
import CartContent from "./CartContent";

import { HashRouter as Route, Routes } from "react-router-dom";
import FinalFooter from "./FinalFooter";
import { WhatsAppIcon } from "./WhatsAppIcon";
import CheckPointButton from "./CheckPointButton";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Data from "./Data";
import ForgotPassword from "./ForgotPassword";

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
      <FinalFooter />
    </div>
  );
}
