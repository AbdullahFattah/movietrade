import React from "react";
import image from "../assets/card-image.jpg";
import profileImage from "../assets/profile3.jpg";
export default function Me({ ownedMovies }) {
  return (
    <div className="container text-center mt-3">
      <p className="text-warning">Hello, User!</p>

      <div className="my-profile" align="center">
        <img
          src={profileImage}
          style={{ height: 100, border: "1px solid white" }}
        ></img>

        <div className="my-info">
          <p>Your username</p>
        </div>
      </div>
      <hr></hr>
      <div className="my-movies">
        <label>Your movie library</label>
        {console.log(ownedMovies)}
        <div className="container">
          <div className="row">
            {ownedMovies.map((movie) => {
              return (
                <div className="col-md-3 my-2" key={movie.id}>
                  <div className="card text-dark">
                    <img
                      className="card-img-top"
                      src={image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">{movie.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
