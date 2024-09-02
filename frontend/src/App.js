import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Cart from "./Pages/Cart/Cart";
import "./App.css";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
function App() {
  const [popup, setPopup] = useState(false);
  return (
    <div className="main">
      {popup ? <LoginPopup setPopup={setPopup} /> : <></>}
      <div className="App">
        <Navbar setPopup={setPopup} />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
