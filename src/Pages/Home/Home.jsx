import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import ProductsList from "./ProductsList";
import ShoppingList from "./ShoppingList";

const Home = () => {
  const [tabRoute, setTabRoute] = useState("product");
  const shoppingData = useSelector((state) => state?.addToCart);
  const countQuantity = shoppingData?.reduce(
    (count, item) => item?.quantity + count,
    0
  );

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>
          <div className="flex gap-4">
            <button
              onClick={() => setTabRoute("product")}
              className="navHome"
              id="lws-home"
            >
              Home
            </button>
            <button
              onClick={() => setTabRoute("shoppingCart")}
              className="navCart"
              id="lws-cart"
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
              <span id="lws-totalCart">{countQuantity}</span>
            </button>
          </div>
        </div>
      </nav>

      <section className="py-16">
        {tabRoute === "product" && <ProductsList />}
        {tabRoute === "shoppingCart" && <ShoppingList />}
      </section>
    </>
  );
};

export default Home;
