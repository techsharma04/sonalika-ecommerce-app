import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducer/handleCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartProducts(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { id, title, price, category, description, image } = props.data;
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
      <div className="px-4 my-3 rounded-2 py-3" style={{ background: "#50616a", color: "white" }} >
        <div style={{ display: "flex", padding: "25px" }}>
          <div style={{ width: "50%", height: "450px", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "25px" }}>
            <small>Category: <span className="text-uppercase">{category}</span></small>
            <h1>{title}</h1>
            <small style={{textAlign: "justify"}}>{description}</small>
            <div className="quantity-container" style={{ width: "120px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <button className="btn btn-dark" onClick={handleQtyDecrement} >
                <AiOutlineMinus />
              </button>
              <div className="quantity-value ">{product[0].itemQuantity}</div>
              <button className="btn btn-dark" onClick={handleQtyIncrement} >
                <AiOutlinePlus />
              </button>
            </div>
            <div>
              <h4 className="display-6 fw-bold my-4">Price: ${price}</h4>
            </div>
          </div>
          <div style={{ background: "#344349", padding: "25px", width: "50%", height: "450px", display: "flex", justifyContent: "center" }}>
            <img src={image} alt={title} width="100%" />
          </div>
        </div>
      </div>
    </>
  );
}
export default CartProducts;
