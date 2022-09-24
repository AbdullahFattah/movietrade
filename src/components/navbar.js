import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ balance }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
        <NavLink to="/" className="mx-4 navbar-brand">
          Movietrade
        </NavLink>
        <div className="navbar-nav">
          <NavLink to="/me" className="nav-item nav-link ">
            Me
          </NavLink>
        </div>
        <div className="navbar-nav ">
          <NavLink to="/buy-movies" className="nav-item nav-link ">
            Market
          </NavLink>
        </div>
        <div className="navbar-nav ">
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink
            to="/recharge"
            className="nav-link nav-item text-success text-center"
          >
            Balance {balance}EGP
          </NavLink>
        </div>
      </nav>
    </>
  );
}
