import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home({ user }) {
  const navigate = useNavigate();
  const loggedUser = window.sessionStorage.getItem("user");

  useEffect(() => {
    if (!loggedUser) {
      navigate("/login");
    }
  }, []);

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
      </div>
    </>
  );
}
