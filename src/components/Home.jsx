import React from "react";
import Products from "./Products";
import "animate.css";
import Navbar from "./Navbar";
import shopCart from "../images/banner.png"

const Home = () => {
  return (
    <div className="hero">
      <div className="card" style={{backgroundColor: "#53636c", borderRadius: "0", marginTop: "118px", marginBottom: "-120px" }} >
        <img src={shopCart} alt="banner" style={{width: "100%"}}/>
        <div className="card-img-overlay  flex-column shadow-sm justify-content-center">
          <div className="container mb-auto">
            <h5 className="card-title display-4 fw-bolder text-dark mt-10 ">
              <span className="animate__animated animate__infinite animate__flash" style={{color: "aliceblue"}}>
                NEW SEASON ARRIVALS ALERT !!!
              </span>
            </h5>
            <h4 style={{color: "aliceblue"}}>
              CHECK OUT ALL THE TRENDS
            </h4>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
