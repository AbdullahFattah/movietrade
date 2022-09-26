import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/card-image.jpg";
export default function Buy({ movie, setMovie }) {
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:4000/movies");
    setMovie(result.data);
  };

  return (
    <>
      <h3 className="text-center mt-3 my-2">Buy movies & TV Shows</h3>
      <div className="container">
        <div className="row">
          <MovieRow movie={movie} />
        </div>
      </div>
    </>
  );
}

function MovieRow({ movie }) {
  let navigate = useNavigate();
  return movie.map((movie) => {
    return (
      <div className="col-md-4 my-2" key={movie.id}>
        <div className="card text-dark">
          <img
            className="card-img-top"
            onClick={() => {
              navigate(`/movie/${movie.id}`);
            }}
            style={{ cursor: "pointer" }}
            src={image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>

            <p>{movie.year}</p>
            <p className="card-text">{movie.description}</p>
            <p className="card-text">
              {movie.price}EGP (${Math.floor(movie.price / 19)})
            </p>
            <Link to={`/purchase/` + movie.id} className="btn btn-primary">
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    );
  });
}
