import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  let totalCartQty = 0;
  cart.cartItems.map((product) => (totalCartQty += product.itemQuantity));
  let totalWishListQty = wishlist.wishListItems.length;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-info py-3 shadow-sm"
      style={{ background: "linear-gradient(#997aa3,#2447BD,#C3C3FF,#1A338C)" }}
    >
      <div className="container  ">
        <Link to="/" className="navbar-brand fw-bold fs-4 mt-2">
          <span className="text-white shadow-sm">SA</span>
          <span className="text-black shadow-sm">Global</span>
          <span className="text-white shadow-sm">Mart</span>
        </Link>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn mt-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn mt-2 " to="/product">
                Product
              </Link>
            </li>
          </ul>
        </div>

        <div className="button-navmb-2 mb-lg-0 ">
          <div className="buttons  mx-auto   ">
            <Link to="/login" className="btn mt-2">
              <i className="fa fa-user-circle-o"></i>
            </Link>
            <Link to="/cart" className="btn mt-2  ">
              <i className="fa fa-shopping-cart "></i>({totalCartQty})
            </Link>
            <Link to="/wishlist" className="btn mt-2 ">
              <i className="fa fa-heart "></i>({totalWishListQty})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
