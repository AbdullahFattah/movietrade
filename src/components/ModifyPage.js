import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const ModifyPage = ({ movie, setMovie }) => {
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
  const movieId = parseInt(useParams().id);
  const selectedMovie = movie[movieId - 1];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Done");
    // await axios
    //   .post("http://localhost:4000/movies", movie)
    //   .then((data) => console.log(data));
  };
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    // console.log(movie);
  };
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
            value={selectedMovie.title}
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
            value={selectedMovie.description}
            className="form-control"
            placeholder="Movie description..."
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Year</label>

          {/* <select
          className="form-select"
          name="year"
          onChange={(e) => handleChange(e)}
        >
          {years.map((year) => {
            return (
              <option value={year} key={year}>
                {year}
              </option>
            );
          })}
        </select> */}
          <input
            type="number"
            name="year"
            onChange={(e) => handleChange(e)}
            value={selectedMovie.year}
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            onChange={(e) => handleChange(e)}
            value={selectedMovie.price}
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
