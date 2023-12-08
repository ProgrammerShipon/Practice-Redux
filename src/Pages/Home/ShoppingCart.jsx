import { useDispatch } from "react-redux";
import {
  cartDecrement,
  cartIncrement,
  removeCart,
} from "../../Features/AddToCart/AAction";
import { productQnDecr, productQnIncr } from "../../Features/Products/PAction";

export default function ShoppingCart({ shop }) {
  const { id, image, title, category, price, quantity } = shop;
  const dispatch = useDispatch();

  const handleIncrement = (objId) => {
    dispatch(cartIncrement(objId));
    dispatch(productQnDecr(objId));
  };

  const handleDecrement = (objId) => {
    dispatch(cartDecrement(objId));
    dispatch(productQnIncr(objId));
  };

  const handleRemove = (objId) => {
    dispatch(removeCart(objId));
  };

  return (
    <>
      <div className="space-y-6">
        {/* Cart Item */}
        <div className="cartCard">
          <div className="flex items-center col-span-6 space-x-6">
            {/* cart image */}
            <img className="lws-cartImage" src={image} alt="product" />
            {/* cart item info */}
            <div className="space-y-2">
              <h4 className="lws-cartName">{title}</h4>
              <p className="lws-cartCategory">{category}</p>
              <p>
                BDT <span className="lws-cartPrice">{price}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
            {/* amount buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleIncrement(id)}
                className="lws-incrementQuantity"
              >
                <i className="text-lg fa-solid fa-plus" />
              </button>
              <span className="lws-cartQuantity">{quantity}</span>
              <button
                onClick={() => handleDecrement(id)}
                className="lws-decrementQuantity"
              >
                <i className="text-lg fa-solid fa-minus" />
              </button>
            </div>
            {/* price */}
            <p className="text-lg font-bold">
              BDT{" "}
              <span className="lws-calculatedPrice">{quantity * price}</span>
            </p>
          </div>
          {/* delete button */}
          <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
            <button
              onClick={() => handleRemove(id)}
              className="lws-removeFromCart"
            >
              <i className="text-lg text-red-400 fa-solid fa-trash" />
            </button>
          </div>
        </div>
        {/* Cart Items Ends */}
      </div>
    </>
  );
}
