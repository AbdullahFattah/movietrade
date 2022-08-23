import React from "react";
import {Link} from "react-router-dom"
import About from "./about";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center m-4">Welcome to Movietrade</h1>
        <h5 className="text-center text-warning">The only place on the internet where you can exchange movies with other people around the world.</h5>
      </div>
    </>
  );
}