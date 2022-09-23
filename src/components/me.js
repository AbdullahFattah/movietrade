import React from "react";
import image from "./card-image.jpg";
export default function Me() {
  return (
    <>
      <div className="container text-center mt-3">
        <p className="text-warning">Hello, User!</p>

        <div className="my-movies">
          <label>Your movie library</label>
          <div className="row">
            <div className="col-md-3 my-2">
              <div className="card text-dark">
                <img
                  className="card-img-top"
                  src={image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">Movie #1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
