import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Home({ user, authenticateLoggedIn }) {
  // const navigate = useNavigate();
  const loggedUser = window.sessionStorage.getItem("user");
  authenticateLoggedIn();
  // useEffect(() => {
  //   if (!loggedUser) {
  //     navigate("/login");
  //   }
  // }, []);
  const fixIds = () => {
    axios.post("http://localhost:4000/movies/fix").then(alert("Done"));
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center m-4">
          {user ? "Welcome back, " + loggedUser : "Welcome to movietrade!"}
        </h1>
        <h5 className="text-center text-warning">
          The only place on the internet where you can exchange movies with
          other people around the world.
        </h5>
        <button onClick={fixIds}>Fix IDs (temporary)</button>
      </div>
    </>
  );
}
