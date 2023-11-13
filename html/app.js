// Input value elements or events
const inputIncrement = document.querySelector("input.lws-increment");
const inputDecrement = document.querySelector("input.lws-decrement");
//-------
const lwsAddMatch = document.querySelector(".lws-addMatch");

// show output elements
const lwsReset = document.querySelector(".lws-reset");
const singleResult = document.querySelector(".lws-singleResult");
const matchElement = document.querySelector(".match");

//-------------- Redux Start -------------------

// initialize keys or actions
const incrementKey = "INCREMENT";
const decrementKey = "DECREMENT";
const resetKey = "RESET";
const incrementFc = (value) => {
  return {
    type: incrementKey,
    payload: value,
  };
};
const decrementFc = (value) => {
  return {
    type: decrementKey,
    payload: value,
  };
};
const resetFc = () => {
  return {
    type: resetKey,
  };
};
const initialize = {
  value: 0,
};

const counterReducer = (state = initialize, actions) => {
  if (actions.type == incrementKey) {
    return {
      ...state,
      value: Number(state.value) + Number(actions.payload),
    };
  } else if (actions.type == decrementKey) {
    if (Number(state.value) >= Number(actions.payload)) {
      return {
        ...state,
        value: Number(state.value) - Number(actions.payload),
      };
    } else {
      return {
        ...state,
        value: 0,
      };
    }
  } else if (actions.type == resetKey) {
    return {
      ...state,
      value: 0,
    };
  } else {
    return { ...state };
  }
};

// redux store function
const store = Redux.createStore(counterReducer);

store.subscribe(renderFC);

// render functions
function renderFC() {
  const state = store.getState();
  singleResult.innerText = state.value.toString();
}

renderFC();

//-------------- Redux End -------------------

//  Increment Input field
inputIncrement.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    const value = e.target.value;

    // redux call
    store.dispatch(incrementFc(value));
  }
});

// Decrement Input Field
inputDecrement.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    const value = e.target.value;

    // redux call
    store.dispatch(decrementFc(value));
  }
});

lwsReset.addEventListener("click", () => store.dispatch(resetFc()));
