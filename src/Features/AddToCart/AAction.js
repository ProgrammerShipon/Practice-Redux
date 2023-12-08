import {
  ADDtOcART,
  DECREMENTcART,
  INCREMENTcART,
  REMOVEcART,
} from "./AActionType";

export const addToCart = (obj) => {
  return {
    type: ADDtOcART,
    payload: obj,
  };
};

export const removeCart = (cartId) => {
  return {
    type: REMOVEcART,
    payload: cartId,
  };
};

export const cartIncrement = (cartId, value = 1) => {
  return {
    type: INCREMENTcART,
    payload: { cartId, value },
  };
};

export const cartDecrement = (cartId, value = 1) => {
  return {
    type: DECREMENTcART,
    payload: { cartId, value },
  };
};
