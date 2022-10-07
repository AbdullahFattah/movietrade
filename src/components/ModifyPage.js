import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ModifyPage = ({ movie, setMovie, authenticateLoggedIn }) => {
  const [modifiedMovie, setModifiedMovie] = useState({
    title: "",
    description: "",
    year: "",
    price: "",
  });
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // If all inputs have no empty values go ahead with the request.
    await axios
      .patch(`http://localhost:4000/movies/${movieId}`, modifiedMovie)
      .then(navigate("/buy-movies"));
  };
  const handleChange = (e) => {
    setModifiedMovie({
      ...modifiedMovie,
      [e.target.name]: e.target.value,
      id: movieId,
    });
    // console.log(movie);
  };
  //   Year dropdown
  const year = new Date().getFullYear();
  const years = [];
  for (let i = year; i > 1800; i--) {
    years.push(i);
  }
  authenticateLoggedIn();
  return (
    <div className="container">
      <h1 align="center">Modify Movie</h1>
      <form
        className="container col-md-4 my-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group">
          <label className="m-2">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => handleChange(e)}
            defaultValue={selectedMovie ? selectedMovie.title : ""}
            className="form-control"
            required
            placeholder="What is the movie called?"
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
            defaultValue={selectedMovie ? selectedMovie.description : ""}
            className="form-control"
            placeholder="Movie description..."
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Year</label>

          <select
            className="form-select"
            name="year"
            onChange={(e) => handleChange(e)}
            defaultValue={selectedMovie ? selectedMovie.year : ""}
          >
            {years.map((year) => {
              return (
                <option
                  defaultValue={selectedMovie ? selectedMovie.year : ""}
                  key={year}
                >
                  {year}
                </option>
              );
            })}
          </select>
          {/* <input
            type="number"
            className="form-control"
            name="year"
            onChange={(e) => handleChange(e)}
            defaultValue={selectedMovie ? selectedMovie.year : ""}
          ></input> */}
        </div>
        <div className="form-group">
          <label className="m-2">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            onChange={(e) => handleChange(e)}
            defaultValue={selectedMovie ? selectedMovie.price : ""}
            min={1}
            placeholder="How much does it cost?"
            required
          ></input>
        </div>
        <div className="mt-4">
          <label className="m-2">Movie or TV Show?</label>
          <select
            name="type"
            onChange={(e) => handleChange(e)}
            className="form-select"
            value="default"
          >
            <option value="default">-- Select --</option>
            <option value="movie">Movie</option>
            <option value="tv-show">TV Show</option>
          </select>
        </div>
        <div align="right" style={{ marginTop: 20 }}>
          <Link
            to="/"
            className="btn btn-danger"
            type="submit"
            style={{ width: "40%", margin: "0 5%" }}
          >
            ❌
          </Link>
          <input
            className="btn btn-success"
            type="submit"
            value="✔"
            style={{ width: "40%", margin: "0 5%" }}
          />
        </div>
      </form>
    </div>
  );
};
export default ModifyPage;
