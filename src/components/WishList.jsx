import { useSelector } from "react-redux";
import WishListProducts from "./WishlistProducts";
import { Link } from "react-router-dom";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.wishListItems);

  const EmptyWishList = () => {
    return (
      <>
        <div>
          <div style={{ display: "flex", justifyContent: "center", margin: "5rem 0rem 5rem"}} >
            <div className="card text-center" style={{ padding: "2rem", background: "#50616a", color: "#fff"}} >
              <p>Your WishList is Empty!</p>
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

  const ShowWishList = () => {
    return (
      <>
        <div>
          <div className="card row ">
            <div style={{ overflow: "auto" }}>
              {wishlist.map((product) => (
                <WishListProducts key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5" style={{marginTop: "150px"}}>
        <div className="row py-4">
          {wishlist.length ? <ShowWishList /> : <EmptyWishList />}
        </div>
      </div>
    </div>
  );
};

export default WishList;
