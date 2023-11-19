import { DDecrement, DIncrement } from "./ActionTypesDy";

const initializeState = {
  value: 0,
};

const dynamicCounterReducer = (state = initializeState, actions) => {
  switch (actions.type) {
    case DIncrement:
      return {
        ...state,
        value: state.value + actions.payload,
      };

    case DDecrement:
      return {
        ...state,
        value: state.value - actions.payload,
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
