import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/reducer/handleCart";
import { removeFromWishlist } from "../redux/reducer/handleWishList";
import { useRef } from "react";

function WishListProducts(props) {
  const { id, title, price, image } = props.data;

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
    <>
      <div className="cart " style={{ background: "#dee3ea" }}>
        <div className="imageDiv">
          <img src={image} alt={title} height="200px" width="200px" />
        </div>
        <div className="contentDiv" style={{ background: "#dee3ea" }}>
          <div>
            <h6>
              <p className=" lead  fw-bold">{title}</p>
            </h6>
          </div>
          <div>
            <h4 className="display-6 fw-bold my-4">${price}</h4>
          </div>
          <div>
            <button
              className="btn  px-2 py-2"
              style={{
                background: "#427D9D",
              }}
              ref={cartBtnText}
              onClick={() => handleOnClick()}
            >
              {existInCart ? "Remove from Cart" : "Add to Cart"}
            </button>

            <AiFillDelete
              onClick={handleRemove}
              style={{ cursor: "pointer" }}
              size={"1.8rem"}
              color="#ff0000"
            />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
export default WishListProducts;
