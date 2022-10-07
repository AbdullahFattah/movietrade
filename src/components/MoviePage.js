import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../assets/card-image.jpg";

const MoviePage = ({ movie, setMovie, authenticateLoggedIn }) => {
  useEffect(() => {
    loadMovies();
  }, []);
  const loadMovies = async () => {
    const result = await axios.get("http://localhost:4000/movies");
    setMovie(result.data);
  };
  const navigate = useNavigate();
  const movieId = parseInt(useParams().id);

  const selectedMovie = movie[movieId - 1];

  const deleteMovie = async () => {
    await axios.delete(`http://localhost:4000/movies/${movieId}`).then(() => {
      alert("Deleted! Click 'OK' to redirect ");
      setTimeout(() => {
        navigate("/buy-movies");
      }, 1000);
    });
  };
  authenticateLoggedIn();
  return (
    <div className="movie-page">
      <div className="movie-page-image" style={{ marginTop: "50px" }}>
        <img src={image}></img>
      </div>
      <div
        className="movie-page-data"
        style={{
          marginTop: "50px",
        }}
      >
        <h1>{selectedMovie ? selectedMovie.title : ""}</h1>
        <p>{selectedMovie ? selectedMovie.year : ""}</p>
        <p>{selectedMovie ? selectedMovie.description : ""}</p>
        <Link
          to={`/purchase/${movieId}`}
          style={{ width: "100%" }}
          className="btn btn-success"
        >
          Buy
        </Link>
        <hr></hr>
        <Link
          to={`/modify/${movieId}`}
          style={{ width: "100%" }}
          className="btn btn-warning"
        >
          Modify
        </Link>
        <hr></hr>
        <button
          onClick={deleteMovie}
          style={{ width: "100%" }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default MoviePage;
