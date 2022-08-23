import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Me from "./components/me";
import Buy from "./components/buy";
import Purchase from "./components/purchase";
import PurchaseComplete from "./components/purchase-complete";
function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/me" element={<Me />}></Route>
            <Route path="/buy-movies" element={<Buy />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/purchase" element={<Purchase />}></Route>
            <Route
              path="/purchase-complete"
              element={<PurchaseComplete />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
