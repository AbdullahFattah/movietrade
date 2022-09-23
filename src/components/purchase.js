import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Purchase({ balance, setBalance }) {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [balanceError, setBalanceError] = useState("");
  // const [ownedMovies, setOwnedMovies] = useState([]);
  useEffect(() => {
    loadMovies();
  }, []);

  const movieId = parseInt(useParams().id);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:4000/movies");
    setFetchedMovies(result.data);
  };
  const movieTitle =
    fetchedMovies.length > 0
      ? fetchedMovies.find((m) => m.id === movieId).title
      : null;
  const moviePrice =
    fetchedMovies.length > 0
      ? fetchedMovies.find((m) => m.id === movieId).price
      : null;

  // const selectedMovie =
  //   fetchedMovies.length > 0
  //     ? fetchedMovies.find((m) => m.id === movieId)
  //     : null;

  return (
    <>
      <div className="container text-center my-5">
        <h3 className="text-center mt-3">Confirm purchase</h3>
        <p className="my-5">
          Please confirm the purchase of{" "}
          <span className="text-warning">{movieTitle}</span> for{" "}
          <span className="text-warning">{moviePrice}EGP</span>
        </p>
        {balanceError}
        <Link to="/buy-movies" className="btn btn-danger">
          Cancel
        </Link>
        <Link
          to="/purchase-complete"
          onClick={(e) => {
            if (balance >= moviePrice) {
              setBalance(balance - moviePrice);
            } else {
              e.preventDefault();
              setBalanceError(
                <p className="text-danger">
                  Not enough balance, please recharge and try again
                </p>
              );
            }
          }}
          className="btn btn-success m-3"
        >
          Confirm
        </Link>
      </div>
    </>
  );
}

export default Purchase;
