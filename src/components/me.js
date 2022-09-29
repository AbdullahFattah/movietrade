import React from "react";
import image from "../assets/card-image.jpg";
import profileImage from "../assets/profile.jpg";

export default function Me({ ownedMovies }) {
  return (
    <div className="container text-center mt-3">
      <div className="my-profile" align="center">
        <img
          src={profileImage}
          style={{ height: 100, border: "1px solid white" }}
        ></img>

        <div className="my-info">
          <p className="text-warning">Your username</p>
          <p className="">A story that describes who you are </p>
        </div>
      </div>
      <hr></hr>
      <div className="my-movies">
        <label className="text-warning">Your movie library</label>
        <div className="container">
          <div className="row">
            {ownedMovies.length == 0 ? (
              <i className="text-secondary" style={{ fontSize: "13px" }}>
                Your library is currently empty, you can buy movies from the
                market
              </i>
            ) : null}
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
                      <button style={{ border: "1px solid" }}>
                        Trade
                      </button>{" "}
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
