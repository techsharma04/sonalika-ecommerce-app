import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/logo.png"

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  let totalCartQty = 0;
  cart.cartItems.map((product) => (totalCartQty += product.itemQuantity));
  let totalWishListQty = wishlist.wishListItems.length;
  return (
    <nav className="navbar navbar-expand-lg navbar-info py-3 shadow-sm fixed-top">
      <div className="navbar-container">
        <div>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn mt-2" aria-current="page" to="/">
                <span style={{color: "white", fontWeight: "700"}}>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn mt-2 " to="/product">
              <span style={{color: "white", fontWeight: "700"}}>Products</span>
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="navbar-brand fw-bold fs-4 mt-2 shadow-sm">
          <img src={logo} alt="logo" style={{borderRadius: "5px"}} />
        </Link>

        <div className="button-navmb-2 mb-lg-0 ">
          <div className="buttons  mx-auto   ">
            <Link to="/login" className="btn mt-2">
              <i className="fa fa-user-circle-o fa-2x" style={{color: "white"}}></i>
            </Link>
            <Link to="/cart" className="btn mt-2  ">
              <i className="fa fa-shopping-cart fa-2x " style={{color: "white"}}></i><span style={{color: "red", fontWeight: "700"}}>( {totalCartQty} )</span>
            </Link>
            <Link to="/wishlist" className="btn mt-2 ` ">
              <i className="fa fa-heart fa-2x" style={{color: "white"}}></i><span style={{color: "red", fontWeight: "700"}}>( {totalWishListQty} )</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
