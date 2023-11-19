import { DECREMENT, INCREMENT } from "./ActionTypes";

const initializeState = {
  value: 0,
};

const counterReducer = (state = initializeState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
