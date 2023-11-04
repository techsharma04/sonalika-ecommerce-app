import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addToWishlist } from "../redux/reducer/handleWishList";
import { useDispatch } from "react-redux";

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
        <div
          className="container container-expand-lg my-2 shadow-sm "
          style={{
            background: "#427D9D",
            width: "100%",
          }}
        >
          {/* <div className="container bg-dark shadow-sm bg-body-tertiary p-0 m-0"  > */}
          <div className="buttons d-flex justify-content-center text-white">
            <button className="btn me-2" onClick={() => setFilter(data)}>
              All
            </button>
            <button
              className="btn me-2"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </button>
            <button
              className="btn me-2"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn me-2"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn me-2"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
          </div>
        </div>

        {filter.map((product) => (
          <div className="col-md-3 mb-4 py-5" key={product.id}>
            <div
              className="card h-100 text-center p-2"
              style={{ background: "#9BBEC8" }}
            >
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: heartClicked[product.id] ? "red" : "black",
                  fontSize: "24px",
                  zIndex: "1",
                }}
                onClick={() => toggleHeartColor(product)}
              ></i>
              <img
                src={product.image}
                className="card-img-t mt-5 op"
                alt={product.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title  mb-0">
                  brand, {product.title.substring(0, 12)}..
                </h5>
                <p className="lead fw-bolder">
                  {Array.from({ length: product.rating.rate }, (_, index) => (
                    <i
                      className="fa fa-star"
                      style={{ color: "#FF0000" }}
                      key={index}
                    ></i>
                  ))}
                  {" (" + product.rating.count + ")"}
                </p>
                <p className="card-text">${product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn"
                  style={{
                    background: "#427D9D",
                  }}
                >
                  Show
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container-fluid md-3 py-">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
