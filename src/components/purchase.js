import React from "react";
import { Link } from "react-router-dom";
export default function Purchase() {
  return (
    <>
      <div className="container text-center my-5">
        <h3 className="text-center mt-3">Confirm purchase</h3>
        <p className="my-5">
          Please confirm the purchase of (Movie name) for (price)
        </p>
        <Link to="/buy-movies" className="btn btn-danger">
          Cancel
        </Link>
        <Link to="/purchase-complete" className="btn btn-success m-3">
          Confirm
        </Link>
      </div>
    </>
  );
}
