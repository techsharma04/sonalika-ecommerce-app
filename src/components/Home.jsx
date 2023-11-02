import React from "react";
import Products from "./Products";
import "animate.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white  border-0">
        <img
          src={`${process.env.PUBLIC_URL}/assests/image1.jpg`}
          className="card-img"
          alt="Background"
          height="500px"
        />
        <div className="card-img-overlay  flex-column shadow-sm justify-content-center">
          <div className="container mb-auto">
            <h5 className="card-title display-4 fw-bolder text-dark mt-10 ">
              <span className="animate__animated animate__infinite animate__flash">
                NEW SEASON ARRIVALS ALERT !!!
              </span>
            </h5>
            <p className="card-text text-dark lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
