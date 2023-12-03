import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductCart from "./ProductCart";

export default function ProductsList() {
  const products = useSelector((state) => state?.products);
  // const products = [];
  console.log("products ", products);

  return (
    <>
      <div className="productWrapper">
        {/* products container */}
        <div className="productContainer" id="lws-productContainer">
          {!products?.length ? (
            <p> No Data Found! </p>
          ) : (
            products.map((product) => (
              <ProductCart key={product?.id} product={product} />
            ))
          )}
        </div>
        {/* products container ends */}
        <div>
          {/* Product Input Form */}
          <AddProduct />
          {/* Product Input Form Ends */}
        </div>
      </div>
    </>
  );
}
