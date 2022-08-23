import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import You from "./components/you";
import Buy from "./components/buy";
import Purchase from "./components/purchase";
function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/you" element={<You />}></Route>
            <Route path="/buy-movies" element={<Buy />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/purchase" element={<Purchase />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
