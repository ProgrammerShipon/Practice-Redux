import { DecrementTP, IncrementTP } from "./ActionsType";

export const incrementT = () => {
  return {
    type: IncrementTP,
  };
};

export const decrementT = () => {
  return {
    type: DecrementTP,
  };
};
