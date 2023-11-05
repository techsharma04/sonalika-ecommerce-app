import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addToWishlist } from "../redux/reducer/handleWishList";
import { useDispatch } from "react-redux";
import heart from "../images/heart.png"

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const responseData = await response.json();
        setData(responseData);
        setFilter(responseData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  // Maintain a separate state for heart icons
  const [heartClicked, setHeartClicked] = useState({});

  // Function to toggle heart color for a product
  const toggleHeartColor = (product) => {
    setHeartClicked((prev) => ({
      ...prev,
      [product.id]: !prev[product.id],
    }));

    dispatch(addToWishlist(product));
  };

  const Loading = () => {
    return <></>;
    // Loading skeleton
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div style={{ width: "100%" }}>
          <div className="buttons d-flex justify-content-center text-white product_bar" style={{ marginTop: "120px" }}>
            <button className="btn me-2" onClick={() => setFilter(data)} style={{ color: "white" }}>
              All
            </button>
            <button className="btn me-2" onClick={() => filterProduct("electronics")} style={{ color: "white" }}>
              Electronics
            </button>
            <button className="btn me-2" onClick={() => filterProduct("jewelery")} style={{ color: "white" }}>
              Jewelery
            </button>
            <button className="btn me-2" onClick={() => filterProduct("men's clothing")} style={{ color: "white" }}>
              Men's Clothing
            </button>
            <button className="btn me-2" onClick={() => filterProduct("women's clothing")} style={{ color: "white" }}>
              Women's Clothing
            </button>
          </div>
        </div>
        <div className="product-container">
          {filter.map((product) => (

            <div className="product-card">
              <div className="product-heart-stars">
                <i className="fa fa-heart product-stars" aria-hidden="true" style={{ color: heartClicked[product.id] ? "red" : "white", }} onClick={() => toggleHeartColor(product)}></i>
                <div>
                  {Array.from({ length: product.rating.rate }, (_, index) => (
                    <i className="fa fa-star" style={{ color: "#FF0000" }} key={index} ></i>
                  ))}
                  {" (" + product.rating.count + ")"}
                </div>
              </div>
              <div className="product-image">
                <img className="pro-image" src={product.image} alt={product.title} />
              </div>
              <div className="product-title">
                <small>Brand {product.title.substring(0, 20)}..</small>
              </div>
              <div className="product-price">
                <legend>Price: $ {product.price}</legend>
              </div>
              <div className="product-btn">
                <NavLink to={`/products/${product.id}`}>
                  <button className="btn btn-light" style={{width: "100%"}}>
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>

          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container-fluid md-3 py-" style={{ margin: "0", padding: "0" }}>
        <div className="product-main-container">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
