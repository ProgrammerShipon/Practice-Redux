import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";

export default function ShoppingList() {
  const shoppingData = useSelector((state) => state?.addToCart);
  console.log("shoppingData ", shoppingData);
  const discount = 0;
  const vat = 0;

  const totalShopAmount = shoppingData.reduce(
    (curr, item) => item?.quantity * item?.price + curr,
    0
  );

  const totalAmount = totalShopAmount + discount + vat;

  const handlePlaceOrder = () => {
    alert(`Thanks Place Order . Your Amount : ${totalAmount}`);
  };

  return (
    <div>
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* Cart Items Start*/}
            {shoppingData?.length ? (
              shoppingData?.map((shop) => (
                <ShoppingCart key={shop?.id} shop={shop} />
              ))
            ) : (
              <p className="text-center py-3"> no shopping here </p>
            )}
            {/* Cart Items Ends */}
          </div>
          {/* Bill Details */}
          <div>
            <div className="billDetailsCard">
              <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                Bill Details
              </h4>
              <div className="space-y-4">
                {/* sub total */}
                <div className="flex items-center justify-between">
                  <p>Sub Total</p>
                  <p>
                    BDT <span className="lws-subtotal">{totalShopAmount}</span>
                  </p>
                </div>
                {/* Discount */}
                <div className="flex items-center justify-between">
                  <p>Discount</p>
                  <p>
                    BDT <span className="lws-discount">{discount}</span>
                  </p>
                </div>
                {/* VAT */}
                <div className="flex items-center justify-between">
                  <p>VAT</p>
                  <p>
                    BDT <span className="vat">{vat}</span>
                  </p>
                </div>
                {/* Total */}
                <div className="flex items-center justify-between pb-4">
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">
                    BDT <span className="lws-total">{totalAmount}</span>
                  </p>
                </div>
                <button onClick={handlePlaceOrder} className="placeOrderbtn">
                  place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
