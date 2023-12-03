import { ADDEDpRODUCT, DECREMENTcART, INCREMENTcART } from "./PActionType";

const initialize = [
  {
    id: 1,
    image: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    title: "Spring and summershoes",
    category: "Mens shoes",
    price: 400,
    quantity: 10,
  },
  {
    id: 2,
    image: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
    title: "Women Winter Clothes",
    category: "Mens shoes",
    price: 110,
    quantity: 30,
  },
];

const generateId = (arr) => {
  const MaxId = arr.reduce((maxId, a) => Math.max(maxId, a?.id), -1);

  return MaxId + 1;
};

const ProductsReducers = (state = initialize, action) => {
  switch (action.type) {
    case ADDEDpRODUCT:
      return [
        ...state,
        {
          ...action?.payload,
          id: state.length ? generateId(state) : 0,
        },
      ];

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

export default ProductsReducers;
