import { combineReducers } from "redux";
import ATCreducer from "./AddToCart/ATCreducer";
import ProductsReducers from "./Products/ProductsReducers";

const rootReducers = combineReducers({
  products: ProductsReducers,
  addToCart: ATCreducer,
});

export default rootReducers;
