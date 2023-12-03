import { ADDEDpRODUCT, DECREMENTcART, INCREMENTcART } from "./PActionType";

export const added = (obj) => {
  return {
    type: ADDEDpRODUCT,
    payload: obj,
  };
};

export const productQnIncr = (cartId, value) => {
  return {
    type: INCREMENTcART,
    payload: { cartId, value },
  };
};

export const productQnDecr = (cartId, value) => {
  return {
    type: DECREMENTcART,
    payload: { cartId, value },
  };
};
