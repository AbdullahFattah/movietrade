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
      <ul style={{ listStyle: "none" }}>
        {movie.map((movie) => {
          return (
            <li align="center" key={movie.id}>
              <Link
                to={`/modify/${movie.id}`}
                onClick={() => {
                  setSelectedMovie(movie);
                }}
                key={movie.id}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Modify;
