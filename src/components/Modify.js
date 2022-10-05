import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Modify = ({ movie, setMovie, selectedMovie, setSelectedMovie }) => {
  useEffect(() => {
    loadMovies();
  }, []);

  console.log(movie);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:4000/movies");
    setMovie(result.data);
  };
  return (
    <div className="container">
      <h1 className="text-center">Modify existing movies</h1>
      {movie.map((movie) => {
        return (
          <Link
            to={`/modify/${movie.id}`}
            onClick={() => {
              setSelectedMovie(movie);
            }}
            key={movie.id}
          >
            {movie.title}
          </Link>
        );
      })}
    </div>
  );
};
export default Modify;
