import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/reducer/handleCart";
import { removeFromWishlist } from "../redux/reducer/handleWishList";
import { useRef } from "react";

function WishListProducts(props) {
  const { id, title, price, description, image } = props.data;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let existInCart = cart.cartItems.find((item) => item.id === id);
  const cartBtnText = useRef();

  const handleOnClick = () => {
    if (cartBtnText.current.innerText === "Add to Cart") {
      dispatch(addToCart(props.data));
    } else {
      dispatch(deleteFromCart(props.data));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromWishlist(props.data));
  };

  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="wishlist-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px" }}>
        <div className="imageDiv">
          <img src={image} alt={title} height="300px" width="300px" style={{border: "5px groove black", padding: "25px"}}/>
        </div>
        <div className="wishlist-title">
          <div className="title"  style={{width: "700px", display: "flex", flexDirection: "column",  }}>
            <h3 style={{fontWeight: "700", color: "#427d9d"}}>{title.substring(0, 40)}...</h3>
            <p style={{textAlign: "justify"}}>{description.substring(0, 300)}...</p>
            <h4 className="display-6 fw-bold my-4">Price: ${price}</h4>
          </div>
        </div>
        <div className="wishlist-button" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: "300px"}}>
            <button className="btn btn-dark" style={{ background: "#427D9", width: "155px"}} ref={cartBtnText} onClick={() => handleOnClick()} >
              {existInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
            <button className="btn btn-dark"><AiFillDelete onClick={handleRemove} style={{ cursor: "pointer" }} size={"1.8rem"} color="#ff0000" /></button>
          </div>
      </div>
      <hr />
    </div>
  );
}
export default WishListProducts;
