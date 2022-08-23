import React from "react";
import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
  <NavLink to="/" className="mx-4 navbar-brand">Movietrade</NavLink>
    <div className="navbar-nav">
      <NavLink to="/you" className="nav-item nav-link ">You</NavLink>
    </div>
    <div className="navbar-nav ">
      <NavLink to="/buy-movies" className="nav-item nav-link ">Buy movies</NavLink>
    </div>
    <div className="navbar-nav ">
      <NavLink to="/about" className="nav-item nav-link">About</NavLink>
    </div>
    <div className="navbar-nav">
      <a className="nav-link nav-item">Balance $0</a>
    </div>
</nav>
    </>
  );
}
