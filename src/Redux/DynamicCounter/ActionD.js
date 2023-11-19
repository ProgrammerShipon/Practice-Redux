import { DDecrement, DIncrement } from "./ActionTypesDy";

export const incrementD = (value) => {
  return {
    type: DIncrement,
    payload: value,
  };
};

export const decrementD = (value) => {
  return {
    type: DDecrement,
    payload: value,
  };
};
