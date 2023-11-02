import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducer/handleCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartProducts(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { id, title, price, image } = props.data;
  const product = cart.cartItems.filter((eachProduct) => eachProduct.id === id);

  const handleQtyDecrement = () => {
    dispatch(removeFromCart(props.data));
    //If the last quantity is going tobe removed
    if (product[0].itemQuantity === 1) {
      alert(title + "removed to the cart");
    }
  };

  const handleQtyIncrement = () => {
    dispatch(addToCart(props.data));
  };

  return (
    <>
      <div
        className="px-4 my-3 rounded-2 py-3"
        style={{ background: "#dee3ea" }}
      >
        <div className="row ">
          <div className="col-md-4" style={{ background: "#dee3ea" }}>
            <img src={image} alt={title} height="200px" width="200px" />
            <hr />
          </div>
          <div>
            <div>
              <h6>
                <p style={{ color: "grey" }}>{title}</p>
              </h6>
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="quantity-container">
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={handleQtyDecrement}
                >
                  <AiOutlineMinus />
                </button>
                <div className="quantity-value ">{product[0].itemQuantity}</div>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={handleQtyIncrement}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <div>
              <h4 className="display-6 fw-bold my-4">${price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartProducts;
