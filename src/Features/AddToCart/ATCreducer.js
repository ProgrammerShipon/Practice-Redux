import { productQnDecr } from "../Products/PAction";
import {
  ADDtOcART,
  DECREMENTcART,
  INCREMENTcART,
  REMOVEcART,
} from "./AActionType";

const initialize = [
  {
    id: 1,
    image: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    title: "Spring and summershoes",
    category: "Mens shoes",
    price: 400,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
    title: "Women Winter Clothes",
    category: "Mens shoes",
    price: 110,
    quantity: 3,
  },
];

const ATCreducer = (state = initialize, action) => {
  switch (action.type) {
    case ADDtOcART:
      if (state.find((item) => item?.id == action?.payload?.id)) {
        return state?.map((item) => {
          if (item?.id == action?.payload?.id) {
            return {
              ...item,
              quantity: item?.quantity + 1,
            };
          }

          return item;
        });
      } else {
        return [...state, { ...action?.payload, quantity: 1 }];
      }

    case REMOVEcART:
      return state.filter((cart) => cart?.id !== action?.payload);

    case INCREMENTcART:
      return state?.map((cart) =>
        cart?.id == action?.payload?.cartId
          ? cart?.quantity + action?.payload?.value
          : cart
      );

    case DECREMENTcART:
      return state?.map((cart) =>
        cart?.id == action?.payload?.cartId
          ? cart?.quantity - action?.payload?.value
          : cart
      );

    default:
      return state;
  }
};

export default ATCreducer;
