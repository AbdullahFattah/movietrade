import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Me from "./components/me";
import Buy from "./components/buy";
import Purchase from "./components/purchase";
import PurchaseComplete from "./components/purchase-complete";
import Recharge from "./components/recharge";
import MoviePage from "./components/MoviePage";
import AddMovie from "./components/AddMovie";
import Login from "./components/Login";
import Modify from "./components/Modify";
import ModifyPage from "./components/ModifyPage";

function App() {
  const [movie, setMovie] = useState([]);
  const [balance, setBalance] = useState(0);
  const [ownedMovies, setOwnedMovies] = useState([]);

  // Login
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    // Balance session storage
    const balance = JSON.parse(window.sessionStorage.getItem("balance"));
    setBalance(balance ? balance : 0);
    // Movie library session
    const ownedMovies = window.sessionStorage.getItem("ownedMovies");
    const parsedMoviesObj = JSON.parse(ownedMovies);
    setOwnedMovies(parsedMoviesObj);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    const ownedMoviesObj = JSON.stringify(ownedMovies);
    window.sessionStorage.setItem("ownedMovies", ownedMoviesObj);
  }, [ownedMovies]);
  return (
    <>
      <div className="container">
        <Router>
          <Navbar balance={balance} />
          <Routes>
            <Route path="/" element={<Home user={user} />}></Route>
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            ></Route>
            <Route
              path="/me"
              element={
                <Me ownedMovies={ownedMovies} setOwnedMovies={setOwnedMovies} />
              }
            ></Route>
            <Route
              path="/buy-movies"
              element={
                <Buy
                  movie={movie}
                  setMovie={setMovie}
                  ownedMovies={ownedMovies}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/recharge"
              element={<Recharge balance={balance} setBalance={setBalance} />}
            ></Route>
            <Route
              path="/purchase/:id"
              element={
                <Purchase
                  balance={balance}
                  setBalance={setBalance}
                  ownedMovies={ownedMovies}
                  setOwnedMovies={setOwnedMovies}
                />
              }
            ></Route>
            <Route
              path="/purchase-complete"
              element={<PurchaseComplete />}
            ></Route>
            <Route
              path="/movie/:id"
              element={<MoviePage movie={movie} />}
            ></Route>
            <Route path="/add-movies" element={<AddMovie />}></Route>
            <Route
              path="/modify"
              element={<Modify movie={movie} setMovie={setMovie} />}
            ></Route>
            <Route
              path="/modify/:id"
              element={<ModifyPage movie={movie} setMovie={setMovie} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
