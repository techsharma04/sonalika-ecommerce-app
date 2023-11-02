import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./components/ProductDetails";
import CartProducts from "./components/CartProducts";
import WishList from "./components/WishList";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Products />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route exact path="/cartproduct" element={<CartProducts />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/wishlist" element={<WishList />} />
          <Route exact path="/cart" element={<Cart/>}/>  
          
            

        </Routes>
      </Router>
    </div>
  );
}

export default App;
