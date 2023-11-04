import React from "react";
import CartProducts from "./CartProducts";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/reducer/handleCart";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  let totalAmount = 0;
  let shippingCharges = 20;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  for (let eachItem of cart) {
    totalAmount += eachItem.price * eachItem.itemQuantity;
  }

  let checkoutPrice = totalAmount + shippingCharges;

  const handleCheckout = () => {
    for (let eachItem of cart) {
      dispatch(deleteFromCart(eachItem));
    }
    navigate("/checkout");
  };

  const EmptyCart = () => {
    return (
      <>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5rem 0rem 5rem",
            }}
          >
            <div className="card text-center" style={cardStyles}>
              <p>Your Cart is Empty!</p>
              <Link to={"/"}>
                <button className="btn btn-dark btn-block">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowCart = () => {
    return (
      <>
        <div>
          <div style={{ overflow: "auto" }}>
            {cart.map((product) => (
              <CartProducts key={product.id} data={product} />
            ))}
          </div>

          <div className="card" style={{ background: "#dee3ea" }}>
            <div className="text-center h2 ">Cart Summary</div>
            <div className="row py-2">
              <p className="col-lg-7 h6">Total</p>
              <p className="col-lg-5">${totalAmount.toFixed(2)}</p>
            </div>

            <div className="row">
              <p className="col-lg-7 h6">Shipping Charges</p>
              <p className="col-lg-5">${shippingCharges.toFixed(2)}</p>
            </div>
            <hr />
            <div className="row">
              <p className="col-lg-7 h4">Checkout Price</p>
              <p className="col-lg-5 h3">${checkoutPrice.toFixed(2)}</p>
            </div>
            <div className="button d-flex justify-content-center">
              <button
                className="btn btn-outline-dark py-2 mb-3"
                style={{
                  background: "#427D9D",
                }}
                onClick={() => handleCheckout()}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container width-50 py-4">
        <div className="row py-4">
          {cart.length ? <ShowCart /> : <EmptyCart />}
        </div>
      </div>
    </div>
  );
};

const cardStyles = {
  padding: "2rem",
  background: "#427D9D",
};

export default Cart;
