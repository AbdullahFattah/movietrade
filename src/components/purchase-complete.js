import React from "react";
import { Link } from "react-router-dom";
export default function PurchaseComplete() {
  return (
    <>
      <div className="container text-center my-5">
        <h2 className="text-success">Purchase complete!</h2>
        <h3 className="text-success">Enjoy watching!</h3>

        <Link className="btn btn-warning m-3 mt-5" to="/buy-movies">
          Buy more movies
        </Link>
        <Link className="btn btn-warning m-3 mt-5" to="/">
          Go home
        </Link>
      </div>
    </>
  );
}
