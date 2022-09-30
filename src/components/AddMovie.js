import { Link } from "react-router-dom";
const AddMovie = () => {
  return (
    <form className="container col-md-4 my-5">
      <div className="form-group">
        <label className="m-2">Title</label>
        <input
          type="text"
          pattern="[a-zA-Z0-9]{1,40}"
          className="form-control"
          required
          placeholder="What is the movie called?"
        ></input>
      </div>
      <div className="form-group">
        <label className="m-2">Description</label>
        <input
          type="text"
          pattern="[A-Z a-z0-9]{1,30}"
          className="form-control"
          placeholder="Movie description..."
          required
        ></input>
      </div>
      <div className="form-group">
        <label className="m-2">Year</label>
        <input
          type="number"
          className="form-control"
          onChange={() => {}}
          min="1900"
          max="2099"
          step="1"
          placeholder="Enter the year of making"
        />
      </div>
      <div className="form-group">
        <label className="m-2">Price</label>
        <input
          type="number"
          className="form-control"
          min={1}
          placeholder="How much does it cost?"
          required
        ></input>
      </div>
      <div className="mt-4">
        <label className="m-2">Movie or TV Show?</label>
        <select className="form-select">
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
          Cancel
        </Link>
        <input
          className="btn btn-success"
          type="submit"
          value="Save"
          style={{ width: "40%", margin: "0 5%" }}
        />
      </div>
    </form>
  );
};

export default AddMovie;
