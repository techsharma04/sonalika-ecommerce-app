import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { addToCart, deleteFromCart } from "../redux/reducer/handleCart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const cartBtnText = useRef();
  const cart = useSelector((state) => state.cart);

  let existInCart = cart.cartItems.find((item) => item.id === product.id);

  const addProduct = (product) => {
    if (cartBtnText.current.innerText === "Add to Cart") {
      dispatch(addToCart(product));
    } else {
      dispatch(deleteFromCart(product));
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <></> //loading
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-4" style={{ padding: "25px", height: "400px", background: "black", border: "5px groove #50616a", display: "flex" }}>
          <img src={product.image} alt={product.title} width="100%" style={{ borderRadius: "5px" }} />
        </div>
        <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <small className="text-uppercase">Category: {product.category}</small>
          <h4 style={{fontWeight: "700"}}>{product.title}</h4>
          <p>{product.description}</p>
          <h3 className="display-6 fw-bold my-4">Price: $ {product.price}</h3>
          <div>
            <button className="btn btn-dark" style={{ width: "200px", float: "left" }} ref={cartBtnText} onClick={() => addProduct(product)} >
              {existInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
            <NavLink to="/cart">
              <button className="btn btn-dark" style={{ width: "200px",  float: "right" }}>Go to Cart</button>
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5" style={{ marginTop: "200px"}}>
        <div className="row py-4" style={{ border: "10px groove #50616a", padding: "25px", display: "flex", justifyContent: "space-around" }}>
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
