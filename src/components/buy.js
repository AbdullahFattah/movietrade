import React from "react";
import { Link } from "react-router-dom";
import image from "./card-image.jpg";
export default function Buy() {
  return (
    <>
      <h3 className="text-center mt-3 my-2">Buy movies</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-2">
            <div className="card text-dark">
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Movie #1</h5>
                <p className="card-text">Quick information about the movie</p>
                <p className="card-text">$60</p>
                <Link to="/purchase" class="btn btn-primary">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="card text-dark">
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Movie #2</h5>
                <p className="card-text">Quick information about the movie</p>
                <p className="card-text">$60</p>
                <Link to="/purchase" class="btn btn-primary">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="card text-dark">
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Movie #3</h5>
                <p className="card-text">Quick information about the movie</p>
                <p className="card-text">$60</p>
                <Link to="/purchase" class="btn btn-primary">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
