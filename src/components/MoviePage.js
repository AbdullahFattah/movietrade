import { useParams } from "react-router-dom";
import image from "../assets/card-image.jpg";

const MoviePage = () => {
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
        <h1>Movie title</h1>
        <p>
          Here are some information about hte movie sucha as the movie
          descirpiton and thecast and the year that the movie was made in and
          some trivial information you know what I'm saying ok I think this is
          enough and noe I'm going to continue typing so that I can see where
          the button will go, okay so the button is going down, now we need
          tosee what's going to happen if we take it all the way down we just
          need to type a little more
        </p>
        <button style={{ width: "100%" }} className="btn btn-success">
          Buy
        </button>
      </div>
    </div>
  );
};
export default MoviePage;
