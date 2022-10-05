import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const noNavBarRoutes = ["/login"];

export default function Navbar({ balance }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (noNavBarRoutes.some((url) => pathname.includes(url))) return null;
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
        <div className="navbar-nav">
          <button
            onClick={() => {
              window.sessionStorage.setItem("user", "");
              navigate("/login");
            }}
            style={{ border: "none", background: "none" }}
            className="nav-link nav-item text-danger text-center"
          >
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
}
