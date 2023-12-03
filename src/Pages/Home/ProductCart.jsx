import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/AddToCart/AAction";

export default function ProductCart({ product }) {
  const { id, image, title, category, price, quantity } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("Product Id ", product);
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="lws-productCard">
        <img className="lws-productImage" src={image} />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName"> {title} </h4>
          <p className="lws-productCategory"> {category} </p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="lws-btnAddToCart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
