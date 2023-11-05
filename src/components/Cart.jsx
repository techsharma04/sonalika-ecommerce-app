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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5rem 0rem 5rem",
          }}
        >
          <div
            className="card text-center"
            style={{ padding: "2rem", background: "#50616a", color: "#fff" }}
          >
            <p>Your Cart is Empty!</p>
            <Link to={"/"}>
              <button className="btn btn-dark btn-block">
                Continue Shopping
              </button>
            </Link>
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

          <div
            className="card"
            style={{ background: "#dee3ea", padding: "25px", color: "black" }}
          >
            <div className="h2">
              <legend>Cart Summary</legend>
            </div>

            <table class="table table-xxl table-dark table-borderless">
              <tbody>
                <tr>
                  <th>Total</th>
                  <td>${totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Shipping Charges</th>
                  <td>${shippingCharges.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Checkout Price</th>
                  <td>${checkoutPrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <div>
              <button
                className="btn btn-dark"
                style={{ color: "white", padding: "10px 20px", width: "100%" }}
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
      <div className="container width-50 py-4" style={{ marginTop: "100px" }}>
        <div className="row py-4">
          {cart.length ? <ShowCart /> : <EmptyCart />}
        </div>
      </div>
    </div>
  );
};



export default Cart;
