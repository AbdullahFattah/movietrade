import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ModifyPage = ({ movie, setMovie }) => {
  useEffect(() => {
    loadMovies();
  }, []);
  const loadMovies = async () => {
    const result = await axios.get("http://localhost:4000/movies");
    setMovie(result.data);
  };
  const movieId = parseInt(useParams().id);
  const selectedMovie = movie[movieId - 1];
  return (
    <div className="container">
      <h1>
        Modify Movie With ID:
        {movieId}
        Movie name: {selectedMovie ? selectedMovie.title : null}
      </h1>
    </div>
  );
};
export default ModifyPage;
