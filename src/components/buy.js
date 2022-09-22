import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "./card-image.jpg";
export default function Buy() {
  const [movie, setMovie] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:4000/movies");
    setMovie(result.data);
  };
  const handleBuy = () => {};

  return (
    <>
      <h3 className="text-center mt-3 my-2">Buy movies</h3>
      <div className="container">
        <div className="row">
          <MovieRow
            movie={movie}
            handleBuy={handleBuy}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        </div>
      </div>
    </>
  );
}

function MovieRow({ movie, handleBuy, selectedMovie, setSelectedMovie }) {
  return movie.map((movie) => {
    return (
      <div className="col-md-4 my-2" key={movie.id}>
        <div className="card text-dark">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <p className="card-text">${movie.price}</p>
            <Link
              to="/purchase"
              onClick={() => {
                setSelectedMovie(movie.title);
              }}
              className="btn btn-primary"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    );
  });
}
