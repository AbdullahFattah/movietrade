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
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <h5 className="card-title">Movie #4</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <h5 className="card-title">Movie #5</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
