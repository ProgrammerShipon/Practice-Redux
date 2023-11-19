import { DecrementTP, IncrementTP } from "./ActionsType";

const initializeState = {
  value: 0,
};

const ToPropsCounterReducer = (state = initializeState, actions) => {
  switch (actions.type) {
    case IncrementTP:
      return {
        ...state,
        value: state.value + 1,
      };
    case DecrementTP:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default ToPropsCounterReducer;
