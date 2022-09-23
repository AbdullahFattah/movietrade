import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Purchase() {
  const [fetchedMovies, setFetchedMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const movieId = parseInt(useParams().id);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:4000/movies");
    setFetchedMovies(result.data);
  };

  return (
    <>
      <div className="container text-center my-5">
        <p></p>
        <h3 className="text-center mt-3">Confirm purchase</h3>
        <p className="my-5">
          Please confirm the purchase of{" "}
          {fetchedMovies.length > 0
            ? fetchedMovies.find((m) => m.id === movieId).title
            : null}{" "}
          for{" "}
          {fetchedMovies.length > 0
            ? fetchedMovies.find((m) => m.id === movieId).price
            : null}
          EGP
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

export default Purchase;
