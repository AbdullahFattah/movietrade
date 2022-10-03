import React from "react";
export default function Home({ user }) {
  const loggedUser = window.localStorage.getItem("user");
  console.log(loggedUser);
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
